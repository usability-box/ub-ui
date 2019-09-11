import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ub-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  showPassword = false;

  constructor() { }

  ngOnInit() {
  }

  togglePasswordVisibility() {
    this.showPassword = this.showPassword === true ? false : true;
  }

}
