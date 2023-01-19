import { Component, Input, OnInit } from '@angular/core';
import { localList } from '../models/list';

@Component({
  selector: 'app-local-list',
  templateUrl: './local-list.component.html',
  styleUrls: ['./local-list.component.sass'],
})
export class LocalListComponent implements OnInit {
  @Input() localList: localList;

  ngOnInit(): void {}
}
