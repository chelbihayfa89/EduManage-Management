import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CourseService } from 'src/app/services/course/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-course-by-admin',
  templateUrl: './edit-course-by-admin.component.html',
  styleUrls: ['./edit-course-by-admin.component.css'],
})
export class EditCourseByAdminComponent implements OnInit {
  showBanner: boolean = true;
  @Input() title: string = 'Edit course iformation';
  course: Course = {};
  courseId!: string;
  id!: string;
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.courseId = id;
      this.courseService.getCourseById(this.courseId).subscribe({
        next: (data) => {
          if (data.course) {
            this.course = data.course;
          } else {
            console.log(data.message);
          }
        },
        error: (err) => {
          console.log(err.message);
        },
      });
    } else {
      console.error('Course ID not found in route');
    }
  }
  editCourse(f: any) {
    if (f.invalid) {
      return;
    }
    this.courseService.updateCourse(this.course, this.courseId).subscribe({
      next: (res) => {
        console.log(res.message);
        if (res.message == 'Course updated successfully') {
          Swal.fire({
            title: 'Course edited and saved successful!',
            icon: 'success',
            color: '#00394f',
            iconColor: '#28a745',
            confirmButtonColor: '#17a2b8',
            confirmButtonText: 'OK',
          });
        }
      },
      error: (err) => {
        if (err.status === 404) {
          alert('Course not found');
        } else if (err.status == 400) {
          alert('Invalid data');
        } else {
          alert('Server error');
        }
      },
    });
  }
  
  logout() {
    this.authService.logout();
  }
}
