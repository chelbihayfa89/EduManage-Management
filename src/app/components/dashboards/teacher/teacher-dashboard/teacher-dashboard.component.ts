import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css'],
})
export class TeacherDashboardComponent implements OnInit {
  courses: any[] = [];
  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.getCourses();
  }
  goToCourseInfo(id: any) {
    console.log(id);
    this.router.navigate(['/course', id]);
  }
  deleteCourse(id: any) {
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
  goToEditCourse(id: any) {
    this.router.navigate(['/teacher/editCourse', id]);
  }
  getCourses() {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data.courses;
    });
  }
}
