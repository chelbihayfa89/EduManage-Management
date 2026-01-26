import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { JwtPayload } from 'src/app/models/jwt-payload.model';
import { jwtDecode } from 'jwt-decode';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { ParentService } from 'src/app/services/parent/parent.service';

@Component({
  selector: 'app-parent-dashboard',
  templateUrl: './parent-dashboard.component.html',
  styleUrls: ['./parent-dashboard.component.css'],
})
export class ParentDashboardComponent implements OnInit {
  criteria = { childPhone: '' };
  parent: JwtPayload | null = null;
  role: string = '';
  constructor(
    private router: Router,
    private authService: AuthService,
    private dashboardService: DashboardService,
    private parentService: ParentService,
  ) {}

  ngOnInit(): void {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.parent = jwtDecode<JwtPayload>(token);
      this.role = this.parent.role || '';
    }
    this.dashboardService.getDashboard(this.role).subscribe({
      next: (data) => {
        console.log(data.message);
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }
  search() {
    console.log(this.criteria);
    this.parentService.getStudentsByParent(this.criteria).subscribe({
      next: (res) => {
        console.log(res.student);
      },
    });
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
