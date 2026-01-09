import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  showBanner: boolean = true;
  @Input() title: string = 'Add Course';
  course: any = {};
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
