import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  button = 'Find out more';
  galery: string = 'assets/images/galery.svg';
  hosting: string = 'assets/images/hosting.png';
  wordpress: string = 'assets/images/wordpress.png';
  server: string = 'assets/images/server.png';
  backup: string = 'assets/images/backup.png';
  checked: string = 'assets/images/checked.png';
  tech: string = 'assets/images/tech.jpg';
  world: string = 'assets/images/world.jpg';
  domains: string = 'assets/images/domains.svg';
  server_pro: string = 'assets/images/server_pro.svg';
  planet: string = 'assets/images/planet.svg';
  employees: string = 'assets/images/employees.svg';

  constructor() {}

  ngOnInit(): void {}
}
