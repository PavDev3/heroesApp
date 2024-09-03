import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
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

  login(email: string, password: string): Observable<User> {
    // return this.http.post<User>(`${this.baseUrl}/auth/login`, {
    //   email,
    //   password,
    // });

    return this.http.get<User>(`${this.baseUrl}users/1`).pipe(
      tap(
        (user) => (this.user = user),
        (user) => localStorage.setItem('Token', 'asdasdasdasd')
      )
    );
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem('Token');
  }
}
