import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
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
  ],
})
export class LoginComponent {}
