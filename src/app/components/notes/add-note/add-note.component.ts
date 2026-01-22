import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course/course.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent implements OnInit {
  showBanner: boolean = true;

  @Input() title: string = 'Add Evaluation';

  courses: any[] = [];
  selectedCourse: Course | null = null;

  addNoteForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private studentService: StudentService,
  ) {}

  ngOnInit(): void {
    this.addNoteForm = this.fb.group(
      { courseId: ['', Validators.required] ,studentId: ['', Validators.required]
  });

    this.courseService.getTeacherCourses().subscribe({
      next: (res) => {
        console.log(res.foundCourses);
        this.courses = res.foundCourses;
      },
    });
  }
  onCourseChange(event: Event) {
    const courseId = (event.target as HTMLSelectElement).value;
    this.selectedCourse = this.courses.find((c) => c._id == courseId)|| null;
  }

  addNote(): void {
    if (this.addNoteForm.invalid) {
      return;
    }

    console.log(this.addNoteForm.value);
  }
}
