import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { SearchPage } from '../search/search.component';
@Component({
  standalone: true,
  selector: 'layout',
  templateUrl: './layout.component.html',
  imports: [
    RouterOutlet,
    SidebarModule,
    ButtonModule,
    MenubarModule,
    AutoCompleteModule,
    SearchPage,
  ],
})
export class LayoutComponent {
  sidebarVisible: boolean = false;

  items = [
    {
      label: 'Menu',
      icon: 'pi pi-fw pi-home',
    },
    {
      label: 'Heroes',
      icon: 'pi pi-fw pi-users',
      routerLink: '/heroes',
      items: [
        {
          label: 'List',
          icon: 'pi pi-fw pi-list',
          routerLink: '/heroes',
        },
        {
          label: 'Add',
          icon: 'pi pi-fw pi-plus',
          routerLink: '/heroes/hew-hero',
        },
      ],
    },
    {
      label: 'About',
      icon: 'pi pi-fw pi-info-circle',
      routerLink: '/about',
    },
  ];
}
