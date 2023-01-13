import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/components/models';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.sass'],
})
export class GaleryComponent implements OnInit {
  public selectedImage: number = null!;
  public images = [
    {
      url: './assets/galery/f2.jpg',
      row: '1/3',
    },
    {
      url: './assets/galery/g2.jpg',
    },
    {
      url: './assets/galery/m3.jpg',
    },
    {
      url: './assets/galery/r1.jpg',
      row: '2/4',
      col: '3',
    },
    {
      url: './assets/galery/a1.jpg',
    },
    {
      url: './assets/galery/a2.jpg',
    },
    {
      url: './assets/galery/a3.jpg',
    },
    {
      url: './assets/galery/a4.jpg',
    },
    {
      url: './assets/galery/a5.jpg',
    },
    {
      url: './assets/galery/a6.jpg',
    },
    {
      url: './assets/galery/a7.jpg',
    },
    {
      url: './assets/galery/a8.jpg',
    },
    {
      url: './assets/galery/a9.jpg',
    },
  ] as Array<Image>;

  constructor() {}
  ngOnInit(): void {
    document.getElementById('arrow-up')!.style.display = 'flex';
  }
}
