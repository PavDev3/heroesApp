import { Routes } from '@angular/router';
import { HeroePage } from '../heroes/pages/hero/heroe.component';
import { LayoutComponent } from '../heroes/pages/layout/layout.component';
import { ListPage } from '../heroes/pages/list/list.component';
import { NewHeroPage } from '../heroes/pages/newHero/new-hero.component';
import { SearchPage } from '../heroes/pages/search/search.component';

export const heroesRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'hero',
        component: HeroePage,
      },
      {
        path: 'search',
        component: SearchPage,
      },
      {
        path: 'edit/:id',
        component: NewHeroPage,
      },
      {
        path: 'new-hero',
        component: NewHeroPage,
      },
      {
        path: 'list',
        component: ListPage,
      },
      {
        path: ':id',
        component: HeroePage,
      },
      {
        path: '**',
        component: ListPage,
      },
    ],
  },
];
