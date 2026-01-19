import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  title: string = 'Our Courses';
  @Input() showBanner: boolean = true;
  courses!: Course[];
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (res) => {
        if (res.courses) {
          this.courses = res.courses;
          console.log(res.courses);
        }
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }
}
