import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'EduManageNew';
  constructor(private router: Router) {}
  isTeacherDashboard(): boolean {
    return this.router.url.startsWith('/dashboard/teacher');
  }
  isAdminDashboard(): boolean {
    return this.router.url.startsWith('/dashboard/admin');
  }
  isStudentDashboard():boolean {
    return this.router.url.startsWith('/dashboard/student');
  }
}
