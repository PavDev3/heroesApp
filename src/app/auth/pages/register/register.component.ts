import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  standalone: true,
  selector: 'register',
  templateUrl: './register.component.html',
  imports: [
    InputTextModule,
    FloatLabelModule,
    PasswordModule,
    DividerModule,
    ButtonModule,
    RouterLink,
  ],
})
export class RegisterComponent {
  constructor() {}
}
