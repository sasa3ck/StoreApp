import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FakeStores } from 'src/app/services/fakeStore.service';
import { fakeStoreApi } from '../models/list';

@Component({
  selector: 'app-fake-list',
  templateUrl: './fake-list.component.html',
  styleUrls: ['./fake-list.component.sass'],
})
export class FakeListComponent implements OnInit {
  @Input() fakeList: fakeStoreApi;
  deleted: string = 'assets/images/delete.png';

  constructor(private fakeStores: FakeStores) {}
  ngOnInit(): void {}

  del(fakeList: fakeStoreApi) {
    this.fakeStores.deleteFakeProduct(fakeList.id).subscribe();
  }
}
