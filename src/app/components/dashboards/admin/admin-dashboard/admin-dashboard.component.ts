import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { User } from 'src/app/models/user.model';
import { CourseService } from 'src/app/services/course/course.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';
import { jwtDecode } from 'jwt-decode';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { StudentService } from 'src/app/services/student/student.service';
import { Student } from 'src/app/models/student.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  courses: Course[] = [];
  users: User[] = [];
  students: any = [];
  admin: any;
  role: string = '';
  coursesCounter: number = 0;
  studentsCounter: number = 0;
  teachersCounter: number = 0;
  constructor(
    private router: Router,
    private authService: AuthService,
    private dashboardService: DashboardService,
    private courseService: CourseService,
    private userService: UserService,
    private studentService: StudentService,
  ) {}

  ngOnInit(): void {
    const token = sessionStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      this.admin = decoded;
      this.role = this.admin.role;
    }
    this.dashboardService.getDashboard(this.role).subscribe({
      next: (data) => {
        console.log(data.message);
      },
    });
    this.studentService.getStudents().subscribe({next: (data) => {
      if(data.students) {
        this.students = data.students;
      }
    }});

    this.getCourses();
    this.getUsers();
  }

  goToCourseInfo(id: string) {
    this.router.navigate(['/course', id]);
  }
  goToEditCourse(id: string) {
    this.router.navigate(['/admin/editCourse', id]);
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
          if (data.message == 'Course deleted successfully') {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
            this.getCourses();
          }
        });
      }
    });
  }
  getCourses() {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        if (data.courses) {
          this.courses = data.courses;
          this.coursesCounter = data.courses.length;
        } else {
          console.log(data.message);
        }
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }
  validateUser(id: string) {
    console.log(id);
    this.userService.validateUser(id).subscribe({
      next: (res) => {
        console.log(res.message);
        if (res.message == 'user validated') {
          this.getUsers();
        }
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }
  goToUserInfo(id: string) {
    this.router.navigate(['/user', id]);
  }

  deleteUser(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((res) => {
      if (res.isConfirmed) {
        this.userService.deleteUser(id).subscribe({
          next: (res) => {
            console.log(res.message);
            if (res.message === 'User deleted successfully') {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
              this.getUsers();
            }
          },
          error: () => {},
        });
      }
    });
  }
  goToEditUser(id: string) {}
  getUsers() {
    this.userService.getUsers().subscribe({
      next: (res) => {
        this.users = res.users;
        this.teachersCounter = this.users.filter(
          (u) => u.role == 'teacher',
        ).length;
      },
      error: () => {},
    });
  }
  logout() {
    this.authService.logout();
  }
}
