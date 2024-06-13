import { Routes } from '@angular/router';
import { HeroePage } from '../heroes/pages/hero/heroe.component';
import { LayoutComponent } from '../heroes/pages/layout/layout.component';

export const heroesRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'hero',
        component: HeroePage,
      },
    ],
  },
];
