import { Component, Input, OnInit } from '@angular/core';
import { fakeStoreApi } from '../models/list';

@Component({
  selector: 'app-fake-list',
  templateUrl: './fake-list.component.html',
  styleUrls: ['./fake-list.component.sass'],
})
export class FakeListComponent implements OnInit {
  @Input() fakeList: fakeStoreApi;

  constructor() {}
  ngOnInit(): void {}
}
