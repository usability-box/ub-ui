import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './header/header.component';
import { LOGIN_ROUTES } from './login.routes';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    StartComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild(LOGIN_ROUTES),
  ],
  exports: [
    SigninComponent,
    SignupComponent
  ]
})
export class LoginModule { }
