import { Component, OnInit } from '@angular/core';
import { list as data } from 'src/app/components/data/list';
import { localList } from 'src/app/components/models/list';

@Component({
  selector: 'app-internal-list',
  templateUrl: './internal-list.component.html',
  styleUrls: ['./internal-list.component.sass'],
})
export class InternalListComponent implements OnInit {
  list: localList[] = data;

  vi_pie: string = 'assets/local-img/vi-pie.png';

  constructor() {}
  ngOnInit(): void {}
}
