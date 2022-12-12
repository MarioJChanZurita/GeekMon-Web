import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from 'src/app.service';
import { AuthService } from './authentication/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private appCurrent: AppService,
    private authService: AuthService
  ) {}

  canActivate() {
    if (!this.appCurrent.isLogin()) {
      this.appCurrent.clearCredential();
      this.appCurrent.redirectToLogin();
      return false;
    }
    return true;
  }

  // isValidToken () {
  //   return this.authService.isAuthorized()
  //     .pipe(
  //       map(() => true),
  //       catchError((err: HttpErrorResponse) => of(false))
  //     )
  // }
}
