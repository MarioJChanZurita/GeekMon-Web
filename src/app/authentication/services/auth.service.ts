import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  geekMonApi: string = environment.geekMonApi;

  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string) {
    return this.http.post<any>(`${this.geekMonApi}/authenticate`, {
      username,
      password,
    });
  }

  register(username: string, password: string) {
    return this.http.post<any>(`${this.geekMonApi}/register`, {
      username,
      password,
    });
  }

  redirectToHome() {
    console.log('redirect home');
  }
}
