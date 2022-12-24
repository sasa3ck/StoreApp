import { Component, Input, OnInit } from '@angular/core';
import { jsonplaceholder } from '../models/list';

@Component({
  selector: 'app-json-list',
  templateUrl: './json-list.component.html',
  styleUrls: ['./json-list.component.sass'],
})
export class JsonListComponent implements OnInit {
  @Input() jsonList: jsonplaceholder;

  constructor() {}
  ngOnInit(): void {}
}
