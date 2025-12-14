import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  constructor() {}

  ngOnInit(): void {
    this.courses = [
      { name: 'HTML', description: 'Basics', duration: 120 },
      { name: 'HTML', description: 'Basics', duration: 120 },
    ];
  }
}
