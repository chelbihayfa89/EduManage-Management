import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent implements OnInit {
  showBanner: boolean = true;
  @Input() title: string = 'Update Course Information';
  course: any = {};
  courseId!: number;
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.courseService.getCourseById(this.courseId).subscribe((data) => {
      this.course = data.course;
    });
  }
  editCourse(f: any) {
    if (f.invalid) {
      return;
    }
    this.courseService.updateCourse(this.course, this.courseId).subscribe({
      next: (res) => {
        console.log(res.message);
        if (res.message == 'Course updated successfully') {
          Swal.fire({
            title: 'Course edited and saved successful!',
            icon: 'success',
            color: '#00394f',
            iconColor: '#28a745',
            confirmButtonColor: '#17a2b8',
            confirmButtonText: 'OK',
          });
        }
      },
      error: (err) => {
        if (err.status === 404) {
          alert('Course not found');
        } else if (err.status == 400) {
          alert('Invalid data');
        } else {
          alert('Server error');
        }
      },
    });
  }
}
