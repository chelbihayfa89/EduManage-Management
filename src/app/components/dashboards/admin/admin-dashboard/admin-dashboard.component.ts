import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  courses: any[] = [];
  users: any[] = [];
  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses = data.courses;
      },
    });
  }
  goToCourseInfo(id: any) {
    this.router.navigate(['/course', id]);
  }
  goToEditCourse(id: any) {
    this.router.navigate(['/admin/editCourse', id]);
  }
  deleteCourse(id: any) {
    console.log(id);
  }
}
