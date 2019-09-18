import { Routes } from '@angular/router';
export const ROUTES: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
];
