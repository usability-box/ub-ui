import { Routes } from '@angular/router';
import { SignupComponent } from './login/signup/signup.component';
import { SigninComponent } from './login/signin/signin.component';
export const ROUTES: Routes = [
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent
  },
];
