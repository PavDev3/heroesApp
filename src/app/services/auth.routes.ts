import { Routes } from '@angular/router';
import { LayoutComponent } from '../auth/pages/layout/layout.component';
import { LoginComponent } from '../auth/pages/login/login.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];

export class AuthRoutes {}
