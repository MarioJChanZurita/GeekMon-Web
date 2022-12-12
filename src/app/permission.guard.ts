import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from 'src/app.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionGuard implements CanActivate {
  constructor(private appCurrent: AppService) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const actions: string[] = this.appCurrent.permissions;
    const codes: string[] = route.data['permissions'];
    return codes.some((code) => actions.includes(code));
  }
}
