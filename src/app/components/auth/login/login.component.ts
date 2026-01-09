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
        console.log(res.message, res.user);
        if (res.message == 'Welcome') {
        }
      },
      error: (err) => {
        console.log(err);
        this.errMsg = err.error.message;
      },
    });
  }
}
