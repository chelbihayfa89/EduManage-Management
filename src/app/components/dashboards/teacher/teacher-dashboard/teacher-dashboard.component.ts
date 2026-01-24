import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { Teacher } from 'src/app/models/teacher.model';
import { CourseService } from 'src/app/services/course/course.service';
import Swal from 'sweetalert2';
import { jwtDecode } from 'jwt-decode';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { JwtPayload } from 'src/app/models/jwt-payload.model';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css'],
})
export class TeacherDashboardComponent implements OnInit {
  courses: Course[] = [];
  teacher: JwtPayload | null = null;
  role: string = "";
  studentsIds!: [{firstName: string; lastName: string}];
  constructor(
    private dashboardService: DashboardService,
    private authService: AuthService,
    private courseService: CourseService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.teacher = jwtDecode<JwtPayload>(token);
      this.role = this.teacher.role || "";
    }
    this.dashboardService.getDashboard(this.role).subscribe({
      next: (res) => {
        console.log(res.message);
      },
    });

    this.getTeacherCourses();
  }

  goToCourseInfo(id: string) {
    console.log(id);
    this.router.navigate(['/course', id]);
  }
  deleteCourse(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.courseService.deleteCourseById(id).subscribe((data) => {
          if (data?.message == 'Course deleted successfully') {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
            this.courses = this.courses.filter((c) => c._id !== id);
          }
        });
      }
    });
  }
  goToEditCourse(id: string) {
    this.router.navigate(['/teacher/editCourse', id]);
  }

  getTeacherCourses() {
    this.courseService.getTeacherCourses().subscribe({
      next: (data) => {
        if (data.foundCourses) {
          this.courses = data.foundCourses;
          console.log('courses', this.courses);
        }
      },
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
