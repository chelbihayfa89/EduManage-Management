import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css'],
})
export class CourseInfoComponent implements OnInit {
  showBanner: boolean = true;
  @Input() title: string = 'Course Info';
  course: Course = {};
  courseId!: string;
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id') || '';
    this.courseService.getCourseById(this.courseId).subscribe({
      next: (res) => {
        if (res.course) {
          this.course = res.course;
        }
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }
}
