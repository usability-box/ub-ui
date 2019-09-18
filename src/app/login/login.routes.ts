import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { StartComponent } from './start/start.component';

export const LOGIN_ROUTES: Routes = [
  {
    path: '',
    component: StartComponent,
    children: [
      {
        path: '',
        component: SigninComponent,
        data: {animation: 'SigninPage'}
      },
      {
        path: 'novo-usuario',
        component: SignupComponent,
        data: {animation: 'SignupPage'}
      }
    ]
  }
];
