import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  proto: string = 'assets/images/proto.png';
  login: string = 'assets/images/login.png';
  register: string = 'assets/images/reg.png';
  points: string = 'assets/images/points.png';
  bullet_points: string = 'assets/images/bullet_points.png';

  isBurgerMenuOpen: boolean = false;
  toggleBurgerMenu(): void {
    this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
  }
  wrapperMenu(): void {
    this.isBurgerMenuOpen = false;
    this.isMenuOpen = false;
  }
  isMenuOpen: boolean = false;
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}
