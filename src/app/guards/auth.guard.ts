import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanMatch, CanActivate {
  readonly AuthService = inject(AuthService);
  readonly router = inject(Router);

  private checkAuthStatus(): boolean | Observable<boolean> {
    return this.AuthService.checkAuthentication().pipe(
      tap((isAuthenticated) => console.log('Authenticated:', isAuthenticated)),
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['./auth/login']);
        }
      })
    );
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> {
    // console.log('Can Match');
    // console.log({ route, segments })
    return this.checkAuthStatus();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    // console.log('Can Activate');
    // console.log({ route, state })

    return this.checkAuthStatus();
  }
}
