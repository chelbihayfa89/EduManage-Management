import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-course-by-teacher',
  templateUrl: './add-course-by-teacher.component.html',
  styleUrls: ['./add-course-by-teacher.component.css']
})
export class AddCourseByTeacherComponent implements OnInit {
   showBanner: boolean = true;
  @Input() title: string = 'Add Course';
  course!: Course;
  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {}
  addCourse(addCourseF: any) {
    if (addCourseF.invalid) {
      return;
    }
    console.log(this.course);
    this.courseService.addCourse(this.course).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Added Successfully!',
        text: 'Your course has been added.',
        showConfirmButton: true,
        timer: 2000,
      }).then(() => {
        addCourseF.resetForm();
        this.course = {};
      })
    });  
  }
}
