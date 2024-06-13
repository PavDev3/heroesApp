import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./services/auth.routes').then((m) => m.authRoutes),
  },
];
