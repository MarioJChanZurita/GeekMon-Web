import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  geekMonApi: string = environment.geekMonApi;

  constructor(private http: HttpClient, private router: Router) {}

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

  getJwtToken() {
    // send auth token in headers and returns jwt token
    return this.http.get<any>(`${this.geekMonApi}/auth/token`);
  }
}
