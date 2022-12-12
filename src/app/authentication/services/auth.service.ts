import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from 'src/app.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  geekMonApi: string = environment.geekMonApi;

  constructor(private http: HttpClient, private router: Router) {}

  /**
   * Autentica al usuario con el protocolo oauth2
   * @returns {Observable} Retorna codigo de acceso
   */
  authenticate(username: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const params = new HttpParams({
      fromString: `grant_type=password&username=${username}&password=${password}&client_id=null&client_secret=null`,
    });
    return this.http.post<any>(`${this.geekMonApi}/auth/login`, params, {
      headers,
    });
  }

  /**
   * Registra un nuevo usuario
   * @returns {Observable} Retorna usuario mensaje de exito o error
   */
  register(username: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const params = new HttpParams({
      fromString: `grant_type=password&username=${username}&password=${password}&client_id=null&client_secret=null`,
    });
    return this.http.post<any>(`${this.geekMonApi}/auth/register`, params, {
      headers,
    });
  }

  /**
   * Envia codigo de autorizacion en los headers
   * @returns {Observable} Retorna token de acceso (jwt)
   */
  getJwtToken(username: string) {
    return this.http.post<any>(`${this.geekMonApi}/auth/token`, {
      username,
    });
  }
}
