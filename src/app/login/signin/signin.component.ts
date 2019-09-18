import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { fadeInAnimation } from 'src/app/shared/animations/fadein.animation';
@Component({
  selector: 'ub-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: [
    fadeInAnimation
  ]
})
export class SigninComponent implements OnInit {

  showPassword = false;

  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  togglePasswordVisibility() {
    this.showPassword = this.showPassword === true ? false : true;
  }

  submitForm() { }

}
