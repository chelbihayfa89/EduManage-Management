import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css'],
})
export class CourseInfoComponent implements OnInit {
  title: string = `Course`;
  course!: Course;
  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const paramId = this.activatedRoute.snapshot.paramMap.get('id');
    if (!paramId) {
      return;
    }
    this.course = this.courseService.getCourseById(paramId)!;
  }
}
