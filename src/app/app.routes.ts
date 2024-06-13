import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/pages/no-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./services/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./services/heroes.routes').then((m) => m.heroesRoutes),
  },

  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
