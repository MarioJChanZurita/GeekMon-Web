import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  authenticate(email: string, password: string) {
    console.log('authenticate');
  }

  redirectToHome() {
    console.log('redirect home');
  }
}
