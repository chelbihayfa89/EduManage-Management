import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-edit-course-by-admin',
  templateUrl: './edit-course-by-admin.component.html',
  styleUrls: ['./edit-course-by-admin.component.css'],
})
export class EditCourseByAdminComponent implements OnInit {
  showBanner: boolean = true;
  @Input() title: string = 'Edit course iformation';
  course!: Course;
  courseId!: string;
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id') || "";
    console.log(this.courseId);
    this.courseService.getCourseById(this.courseId).subscribe({
      next: (data) => {
        if (data.course) {
          this.course = data.course;
        } else {
          console.log(data.message);
        }
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }
  editCourse(f: any) {}
}
