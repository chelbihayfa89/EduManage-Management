import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Teacher } from 'src/app/models/teacher.model';
import { CourseService } from 'src/app/services/course/course.service';
import { TeacherService } from 'src/app/services/teacher/teacher.service';

@Component({
  selector: 'app-add-course-by-admin',
  templateUrl: './add-course-by-admin.component.html',
  styleUrls: ['./add-course-by-admin.component.css'],
})
export class AddCourseByAdminComponent implements OnInit {
  showBanner: boolean = true;
  @Input() title: string = 'Add Course';
  course: Course = {};
  teacher: Teacher = {};
  teachers: Teacher[] = [];
  constructor(
    private teacherService: TeacherService,
    private courseService: CourseService,
  ) {}

  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe({
      next: (data) => {
        this.teachers = data.foundUsers;
      },
    });
  }
  addCourse(f: any) {
    console.log(this.course);
    this.courseService.addCourse(this.course).subscribe({
      next: (data) => {
        console.log(data.message);
      },
    });
  }
}
