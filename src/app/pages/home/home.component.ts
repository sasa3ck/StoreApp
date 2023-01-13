import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  button = 'Find out more';
  uniform_school: string = 'assets/home-img/uniform-school.png';
  uniform_walk: string = 'assets/home-img/uniform-walk.png';
  uniform_training: string = 'assets/home-img/uniform-training.png';
  accesori: string = 'assets/home-img/accesori.png';
  checked: string = 'assets/images/checked.png';
  forward: string = 'assets/home-img/forward.png';
  chevron: string = 'assets/home-img/chevron.png';
  maxresdefault: string = 'assets/home-img/maxresdefault.png';
  fashion: string = 'assets/home-img/fashion-accessories-clothes.jpg';
  bags: string = 'assets/home-img/bags.png';
  clothes: string = 'assets/home-img/clothes.png';
  hairdresser: string = 'assets/home-img/hairdresser.png';
  shopping: string = 'assets/home-img/shopping.png';
  store: string = 'assets/home-img/about-store.jpg';


  constructor() {}
  ngOnInit(): void {
    document.getElementById('arrow-up')!.style.display = 'flex';
  }

  scrollTop() {
    document.getElementById('myScroll')!.scrollIntoView({ behavior: 'smooth' });
  }
}
