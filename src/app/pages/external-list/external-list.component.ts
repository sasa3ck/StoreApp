import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { fakeStoreApi, jsonplaceholder } from 'src/app/components/models/list';
import { FakeStores } from 'src/app/services/fakeStore.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-external-list',
  templateUrl: './external-list.component.html',
  styleUrls: ['./external-list.component.sass'],
})
export class ExternalListComponent implements OnInit {
  // fakeStore$: Observable<fakeStoreApi[]>;
  jsonStore: jsonplaceholder[] = [];

  fakeLoading = false;
  jsonLoading = false;

  filter = '';

  constructor(
    public FakeStores: FakeStores,
    // private FakeStores: FakeStores,
    private JsonStores: FakeStores,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.fakeLoading = true;
    this.jsonLoading = true;

    // this.fakeStore$ = this.FakeStores.getFakeStore().pipe(
    //   tap(() => (this.fakeLoading = false))
    // );
    this.FakeStores.getFakeStore().subscribe(() => {
      this.fakeLoading = false;
    });

    this.JsonStores.getJsonStore().subscribe((e) => {
      this.jsonStore = e;
      this.jsonLoading = false;
    });
  }
}
