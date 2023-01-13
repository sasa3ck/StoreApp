import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  scroll_img: string = 'assets/home-img/level-up.png';
  scrollTop() {
    document.getElementById('myScroll')!.scrollIntoView({ behavior: 'smooth' });
  }
}
