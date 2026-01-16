import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    const decoded: any = jwtDecode(token);
    const expectedRole = route.data['role'];
    if (decoded.role !== expectedRole) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
