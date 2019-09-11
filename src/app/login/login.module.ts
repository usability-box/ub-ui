import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    SigninComponent,
    SignupComponent
  ]
})
export class LoginModule { }
