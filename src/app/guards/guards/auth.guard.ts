import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }

    const token = sessionStorage.getItem('token')!;
    const decoded: any = jwtDecode(token);

    const expectedRole = route.data['role'];

    if (expectedRole && decoded.role !== expectedRole) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
