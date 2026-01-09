import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  courses!: Course[];
  users: any[] = [];
  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses = data.courses;
      },
    });
  }
  goToCourseInfo(id: string) {
    this.router.navigate(['/course', id]);
  }
  goToEditCourse(id: string) {
    this.router.navigate(['/admin/editCourse', id]);
  }
  deleteCourse(id: string) {
    console.log(id);
  }
}
