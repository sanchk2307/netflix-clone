import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';
import { map, take, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthRedirectGuard implements CanActivate {
  authService = inject(AuthService);
  router = inject(Router);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    const loggedInPath = route.data['loggedInPath'];
    return this.authService.user.pipe(
      take(1),
      map((user) => {
        const isAuth = !!user;
        if (isAuth) {
          this.router.navigate([loggedInPath]);
          return false;
        }
        return true;
      })
    );
    // return true
  }
}
