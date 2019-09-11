import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'ub-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  showPassword = false;

  loginForm: FormGroup;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  togglePasswordVisibility() {
    this.showPassword = this.showPassword === true ? false : true;
  }

  submitForm(){
    console.log('Formulário enviado');
  }

  signup() {
    this.router.navigate(['/signup']);
  }

}
