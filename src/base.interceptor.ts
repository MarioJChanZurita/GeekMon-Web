import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {
  constructor(private appCurrent: AppService, private router: Router) {}

  /**
   * Intercepta todas las peticiones http
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = request.url.includes('login') ? null : this.appCurrent.token;
    const nHeaders: any = {};
    // only on request to own api add headers
    if (request.url.includes('localhost')) {
      nHeaders['Authorization'] = `Bearer ${token || ''}`;
      request.headers
        .keys()
        .forEach((key) => (nHeaders[key] = request.headers.get(key)));
      request = request.clone({ setHeaders: nHeaders });
    }
    // const nHeaders: any = {
    //   Authorization: `Bearer ${token || ''}`,
    // };
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.appCurrent.clearCredential();
          switch (err.status) {
            case 401:
              !request.url.includes('is_authorized') &&
                this.appCurrent.redirectToLogin();
              break;
          }
        }
        return throwError(() => err);
      })
    );
  }
}
