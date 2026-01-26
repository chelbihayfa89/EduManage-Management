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
  @Input() limit: number = 0;
  courses!: Course[];
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (res) => {
        this.courses = res.courses;
        if (this.limit) {
          this.courses = this.courses.slice(0, this.limit);
        }
      },
      error: (err) => {
        console.error(err.error.message);
      },
    });
  }
}
