import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../services/auth.service';
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

  onLogin(): void {
    this.authService.login('email@gmail.com', '123456').subscribe((user) => {
      this.router.navigate(['/']);
    });
  }
}
