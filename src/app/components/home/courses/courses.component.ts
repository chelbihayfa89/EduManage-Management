import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  title: string = "Our Courses";
  @Input() showBanner: boolean = true;
  courses: Course[] = [];
  constructor() {}

  ngOnInit(): void {
    this.courses = [
      { id: "ax1" , name: 'HTML', description: 'Basics', duration: 120 },
      { id: "ax2" , name: 'CSS', description: 'Basics', duration: 100 },
    ];
  }
}
