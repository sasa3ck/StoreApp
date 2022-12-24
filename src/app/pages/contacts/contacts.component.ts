import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass'],
})
export class ContactsComponent implements OnInit {
  title: string = 'get in touch';
  waves: string = 'assets/images/waves.png';
  address: string = 'assets/images/address-contacts.png';
  phone: string = 'assets/images/phone-contacts.png';
  email: string = 'assets/images/email-contacts.png';

  constructor() {}
  ngOnInit(): void {}
}
