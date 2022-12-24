import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent implements OnInit, AfterViewInit {
  fb: string = 'assets/about-img/facebook.png';
  twit: string = 'assets/about-img/twitter.png';
  ln: string = 'assets/about-img/linkedin.png';
  inst: string = 'assets/about-img/instagram.png';
  thoughts: string = 'assets/about-img/thoughts.jpg';

  items = [
    {
      id: 1,
      name: 'Katerina Masero and Lisa Masters',
      text: 'People who will help you dress stylishly and help with advice',
    },
    {
      id: 2,
      name: 'Support',
      text: 'Quality person who will answer all your questions',
    },
    {
      id: 3,
      name: 'Clothes for men',
      text: "Men's collection that attracts more and more attention and will make you irresistible",
    },
    {
      id: 4,
      name: "Women's accessories",
      text: 'New collection of accessories for women',
    },
    {
      id: 5,
      name: "Men's accessories",
      text: 'New collection of accessories for men',
    },
    { id: 6, name: 'Fifa Caren', text: 'Fashion manager' },
    { id: 7, name: 'Tatya Manic', text: 'Famous models who dress with us' },
    {
      id: 8,
      name: 'Clothes for women',
      text: 'Stylish clothes for women and any sizes',
    },
  ];

  constructor() {}

  ngAfterViewInit(): void {
    let imgBx = document.querySelectorAll('.imgBx');
    let contentBx = document.querySelectorAll('.contentBx');

    for (let i = 0; i < imgBx.length; i++) {
      imgBx[i].addEventListener('mouseover', () => {
        for (let i = 0; i < contentBx.length; i++) {
          contentBx[i].className = 'contentBx';
        }
        contentBx[i].className = 'contentBx active';

        for (let i = 0; i < imgBx.length; i++) {
          imgBx[i].className = 'imgBx';
        }
        imgBx[i].className = 'imgBx active';
      });
    }
  }

  ngOnInit(): void {}
}
