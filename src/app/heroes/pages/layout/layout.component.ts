import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
@Component({
  standalone: true,
  selector: 'layout',
  templateUrl: './layout.component.html',
  imports: [RouterOutlet, SidebarModule, ButtonModule, MenubarModule],
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
    },
    {
      label: 'About',
      icon: 'pi pi-fw pi-info-circle',
      routerLink: '/about',
    },
  ];

  login = [
    {
      label: 'Sign Out',
      icon: 'pi pi-fw pi-sign-out',
      routerLink: '/auth/login',
    },
  ];
}
