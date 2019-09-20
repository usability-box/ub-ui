import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './header/header.component';
import { LOGIN_ROUTES } from './login.routes';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import {InputMaskModule} from 'primeng/inputmask';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    StartComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    InputTextModule,
    PasswordModule,
    MessageModule,
    InputMaskModule,
    MessagesModule,
    ButtonModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild(LOGIN_ROUTES),
  ],
  exports: [
    SigninComponent,
    SignupComponent
  ]
})
export class LoginModule { }
