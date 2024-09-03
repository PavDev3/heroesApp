import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { User } from '../../../auth/interfaces/user.interface';
import { SearchPage } from '../search/search.component';
import { AuthService } from './../../../auth/services/auth.services';
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
  readonly AuthService = inject(AuthService);
  readonly router = inject(Router);

  get currentUser(): User | undefined {
    return this.AuthService.currentUser;
  }

  onLogout() {
    this.AuthService.logout();

    this.router.navigate(['/auth/login']);
  }

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
          routerLink: '/heroes/new-hero',
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
