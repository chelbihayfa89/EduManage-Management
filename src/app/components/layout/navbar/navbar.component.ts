import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from 'src/app/models/jwt-payload.model';
import { Role } from 'src/app/models/role.type';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: JwtPayload | null = null;
  role: Role| null = null;
  isLoggedIn: boolean = false;
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.user = jwtDecode<JwtPayload>(token);
      this.role = this.user.role || '';
    }
    this.isLoggedIn = this.authService.isLoggedIn();
  }
  getDashboardLink() {
    const routes = {
      admin: '/dashboard/admin',
      teacher: '/dashboard/teacher',
      student: '/dashboard/student',
      parent: '/dashboard/parent',
    };

    return this.role ? routes[this.role] : '/';

  }
  logout() {
    this.authService.logout();
  }
}
