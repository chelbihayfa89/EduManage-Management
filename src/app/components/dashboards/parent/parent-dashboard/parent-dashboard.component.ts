import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { JwtPayload } from 'src/app/models/jwt-payload.model';
import { jwtDecode } from 'jwt-decode';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { ParentService } from 'src/app/services/parent/parent.service';
import { Course } from 'src/app/models/course.model';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-parent-dashboard',
  templateUrl: './parent-dashboard.component.html',
  styleUrls: ['./parent-dashboard.component.css'],
})
export class ParentDashboardComponent implements OnInit {
  criteria = { childPhone: '' };
  courses: Course[] | null = null;
  parent: JwtPayload | null = null;
  role: string = '';
  selectedCourseIndex: number = -1;
  selectedCourse: Course | null = null;
  studentId: string | null = null;
  note: Note | null = null;
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
  selectCourse(i: number) {
    this.selectedCourseIndex = i;
    this.selectedCourse = this.courses
      ? this.courses[this.selectedCourseIndex]
      : null;

    if (!this.studentId) return;
    if (!this.selectedCourse || !this.selectedCourse._id) return;
    this.parentService
      .getStudentCourseNote(this.studentId, this.selectedCourse._id)
      .subscribe({
        next: (res) => {
          console.log('Réponse API note:', res);
          this.note = res.note;
        },
      });
  }
  search() {
    console.log(this.criteria);
    this.parentService.getStudentCoursesForParent(this.criteria).subscribe({
      next: (res) => {
        this.courses = res.courses;
        this.studentId = res.student?._id ?? null;
      },
      error: (err) => {
        console.error(err.error.message);
      },
    });
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
