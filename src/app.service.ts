import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import {
  catchError,
  concatMap,
  forkJoin,
  map,
  mergeMap,
  Observable,
  of,
  throwError,
} from 'rxjs';
import { AuthService } from 'src/app/authentication/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _username: string;
  public get username() {
    return this._username.replace(/[^a-zA-Z0-9 ]/g, '');
  }
  public set username(nvalue: string) {
    this._username = nvalue;
    this.cookie.put('username', JSON.stringify(nvalue));
  }

  private _userId: string;
  public get userId() {
    return this._userId.replace(/[^a-zA-Z0-9 ]/g, '');
  }
  public set userId(nvalue: string) {
    this._userId = nvalue;
    this.cookie.put('userId', JSON.stringify(nvalue));
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
    this._userId = cookie.get('userId') || '';
    this._username = cookie.get('username') || '';
  }

  /**
   * Registra nuevos usuarios
   * @returns
   */
  register(user: any): Observable<any> {
    const { username, password } = user;
    return this.authService.register(username, password);
  }

  /**
   * Autentica los usuarios y administra las credencial en el localStorage
   * @returns
   */
  authenticate(username: string, password: string): Observable<any> {
    this.username = username;
    return this.authService.authenticate(username, password).pipe(
      concatMap(() => this.authService.getJwtToken(username)),
      map((resp) => {
        this.setCredential(resp);
        return of(true);
      })
    );
  }
  // concatMap(() => {
  //   this.username = username;
  //   this.authService.getJwtToken(username).subscribe({
  //     next: (res: any) => {
  //       this.setCredential(res);
  //     },
  //     error: (err) => throwError(() => err),
  //   });
  //   return of(true);
  // }),
  // catchError((err) => throwError(() => err))

  /**
   * Get the warehouses list, includes OPTIONAL params to paginate and search
   */
  setCredential(dataUser: any) {
    const { jwt, permissions, userId } = dataUser;
    this.token = jwt;
    this.userId = userId;
    this.permissions = permissions || [];
  }

  /**
   * Verifica si el usuario esta logueado
   */
  isLogin(): boolean {
    return Boolean(this.token);
  }

  /**
   * Limipia las credenciales del almacenamiento
   */
  clearCredential() {
    sessionStorage.clear();
    localStorage.clear();
    this.cookie.removeAll();
    this.token = '';
    this.permissions.splice(0, this.permissions.length);
  }

  /**
   * Desloguea al usuario limpiando las credenciales y redirige a la pantalla de login
   */
  logout() {
    this.clearCredential();
    this.redirectToLogin();
  }

  /**
   * Checa permisos del usuario actual
   */
  checkPermission(...codes: string[]) {
    return codes.some((code) => this.permissions.includes(code));
  }

  /**
   * Redirige al login
   */
  redirectToLogin() {
    this.router.navigate(['/auth/sign-in']).then(() => {
      window.location.reload();
    });
  }

  /**
   * Redirige al home
   */
  redirectToHome() {
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }
}
