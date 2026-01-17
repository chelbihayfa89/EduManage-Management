import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData: any = { phone: '', password: '' };
  errMsg!: string;
  role!: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.login(this.loginData).subscribe({
      next: (res) => {
        if (res.message === 'Login successful') {
          sessionStorage.setItem('token', res.token);

          const decoded: any = jwtDecode(res.token);
          this.role = decoded.role;

          switch (this.role) {
            case 'admin':
              this.router.navigate(['/admin/dashboard']);
              break;

            case 'teacher':
              this.router.navigate(['/dashboard/teacher']);
              break;

            case 'student':
              this.router.navigate(['/student/dashboard']);
              break;

            case 'parent':
              this.router.navigate(['/parent/dashboard']);
              break;

            default:
              this.router.navigate(['/']);
              break;
          }
        }
      },
      error: (err) => {
        console.log(err.error.message);
        this.errMsg = err.error.message;
      },
    });
  }
}
