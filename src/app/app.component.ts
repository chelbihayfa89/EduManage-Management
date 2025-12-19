import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'EduManage';
  constructor(private router: Router) {}
  isAdminDashboard() {
    return this.router.url.startsWith('/admin/dashboard');
  }
  isStudentDashboard() {
    return this.router.url.startsWith('/student/dashboard');
  }
  isParentDashboard() {
    return this.router.url.startsWith('/parent/dashboard');
  }
  isTeacherDashboard(){
    return this.router.url.startsWith('/teacher/dashboard');
  }
}
