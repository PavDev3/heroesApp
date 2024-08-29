import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  private user?: User;

  readonly baseUrl = environment.baseUrl;

  constructor() {}

  get currentUser(): User | undefined {
    // Si usuario existe, retornar usuario si no, retornar undefined
    if (this.user) {
      return this.user;
    }
    return undefined;
  }
}
