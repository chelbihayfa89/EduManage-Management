import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {
courses!: Course [];
  constructor(private courseServices: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.courses = this.courseServices.getAllCourse();
  }
  viewCourse(id: string) {
    this.router.navigate(['teacher/courses', id])
  }
}
