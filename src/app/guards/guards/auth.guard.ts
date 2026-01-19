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
    // 🟢 STEP 1: هل المستخدم متصل؟
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }

    // 🟢 STEP 2: نجيب التوكن (بما إنه موجود)
    const token = sessionStorage.getItem('token')!;
    const decoded: any = jwtDecode(token);

    // 🟢 STEP 3: role متاع الصفحة
    const expectedRole = route.data['role'];

    // 🟢 STEP 4: نتحقق من ال role
    if (expectedRole && decoded.role !== expectedRole) {
      this.router.navigate(['/']);
      return false;
    }

    // 🟢 STEP 5: كل شي OK
    return true;
  }
}
