import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  readonly baseUrl = environment.baseUrl;

  private user?: User;
  constructor() {}

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  login(email: string, password: string): Observable<User> {
    // http.post('login',{ email, password });
    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap((user) => (this.user = user)),
      tap((user) => localStorage.setItem('token', 'tokendeprueba.123'))
    );
  }

  logout(): void {
    this.user = undefined;
    localStorage.clear();
  }
  checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false);

    const token = localStorage.getItem('token');

    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap((user) => (this.user = user)),
      map((user) => !!user)
      // catchError( err => of(false) )
    );
  }
}