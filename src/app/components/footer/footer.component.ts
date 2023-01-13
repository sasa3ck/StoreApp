import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  proto: string = 'assets/images/proto.png';
  dimensions: string = 'assets/images/dimensions.png';
  // arrow: string = 'assets/images/arrow.png';
  // facebook: string = 'assets/images/facebook.png';
  // instagram: string = 'assets/images/instagram.png';
  // linkedin: string = 'assets/images/linkedin.png';
  // adress: string = 'assets/images/maps.png';
  // phone: string = 'assets/images/phone.png';
  // mail: string = 'assets/images/email.png';

  constructor() {}

  ngOnInit(): void {}
}
