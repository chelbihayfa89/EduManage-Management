import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData: any = { phone: '', password: '' };
  errMsg!: string;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  login() {
    this.authService.login(this.loginData).subscribe({
      next: (res) => {
        console.log(res);
        const { role } = res.user;
        switch (role) {
          case 'teacher':
            this.router.navigate(['/teacher/dashboard']);
            break;
          case 'student':
            this.router.navigate(['/student/dashboard']);
            break;
          case 'parent':
            this.router.navigate(['/parent/dashboard']);
            break;
          default:
          // code block
        }
      },
      error: (err) => {
        console.log(err.error.message);
        this.errMsg = err.error.message;
      },
    });
  }
}
