import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { AuthService } from 'src/app/authentication/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _userId!: string;
  public get userId() {
    return this._userId;
  }
  public set userId(nvalue: string) {
    this._userId = nvalue;
    localStorage.setItem('userId', JSON.stringify(nvalue));
  }

  private _token: string;
  public get token() {
    return this._token;
  }
  public set token(nvalue: string) {
    this._token = nvalue;
    localStorage.setItem('security_token', nvalue);
  }

  private _permissions: string[];
  public get permissions() {
    return this._permissions;
  }
  public set permissions(nvalue: string[]) {
    this._permissions = nvalue;
    localStorage.setItem('permissions', JSON.stringify(nvalue));
  }

  parseJson(key: string, ndefault?: any): any {
    const aux = localStorage.getItem(key);
    return key && aux ? JSON.parse(aux) : ndefault;
  }

  constructor(
    private cookie: CookieService,
    private authService: AuthService,
    private router: Router
  ) {
    this._token = localStorage.getItem('security_token') || '';
    this._permissions = this.parseJson('security_actions', []);
    this._userId = localStorage.getItem('userId') || '';
  }

  register(user: any): Observable<any> {
    const { username, password } = user;
    return this.authService.register(username, password);
  }

  authenticate(username: string, password: string): Observable<any> {
    // add permissions in back
    return this.authService.authenticate(username, password).pipe(
      map((res: any) => {
        this.authService.getJwtToken().subscribe({
          next: (res: any) => {
            this.setCredential(res);
          },
          error: (err) => throwError(() => err),
        });

        return true;
      }),
      catchError((err) => throwError(() => err))
    );
  }

  setCredential(dataUser: any) {
    const { jwt, permissions, userId } = dataUser;
    this.token = jwt;
    this.userId = userId;
    this.permissions = permissions || [];
  }

  isLogin(): boolean {
    return Boolean(this.token);
  }

  clearCredential() {
    sessionStorage.clear();
    localStorage.clear();
    this.cookie.removeAll();
    this.token = '';
    this.permissions.splice(0, this.permissions.length);
  }

  logout() {
    this.clearCredential();
    this.redirectToLogin();
  }

  checkPermission(...codes: string[]) {
    return codes.some((code) => this.permissions.includes(code));
  }

  redirectToLogin() {
    this.router.navigate(['/auth/sign-in']).then(() => {
      window.location.reload();
    });
  }

  redirectToHome() {
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }

  getUserId() {
    return this.userId;
  }
}
