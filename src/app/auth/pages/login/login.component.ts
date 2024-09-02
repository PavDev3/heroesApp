import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../services/auth.services';
@Component({
  standalone: true,
  selector: 'login ',
  templateUrl: './login.component.html',
  imports: [
    InputTextModule,
    FloatLabelModule,
    PasswordModule,
    DividerModule,
    ButtonModule,
    RouterLink,
  ],
})
export class LoginComponent {
  readonly authService = inject(AuthService);
  readonly router = inject(Router);

  onLogin() {
    this.authService.login('', '').subscribe((user) => {
      console.log('Usuario logueado ', user);
      this.router.navigate(['/']);
    });
  }
}
