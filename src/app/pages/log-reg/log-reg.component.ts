import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.sass'],
})
export class LogRegComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    document.getElementById('arrow-up')!.style.display = 'none';
  }

  signupBtn() {
    const formBx = document.querySelector('.formBx');
    formBx?.classList.add('active');
  }

  signinBtn() {
    const formBx = document.querySelector('.formBx');
    formBx?.classList.remove('active');
  }
}
