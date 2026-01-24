import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course/course.service';
import { NoteService } from 'src/app/services/note/note.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent implements OnInit {
  showBanner: boolean = true;

  @Input() title: string = 'Add Student Evaluation';

  courses: Course[] = [];
  selectedCourse: Course | null = null;

  addNoteForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private noteService: NoteService,
  ) {}

  ngOnInit(): void {
    this.addNoteForm = this.fb.group({
      courseId: ['', Validators.required],
      studentId: ['', Validators.required],
      note: ['', [Validators.required, Validators.min(0), Validators.max(20)]],
      evaluation: ['', [Validators.required, Validators.minLength(5)]],
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
    this.selectedCourse = this.courses.find((c) => c._id == courseId) || null;
  }

  addNote(): void {
    if (this.addNoteForm.invalid) {
      return;
    }
    console.log(this.addNoteForm.value);
    this.noteService.addNoteToStudent(this.addNoteForm.value).subscribe({
      next: (res) => {
        console.log(res.message);
        if (res.message === 'Note affected successfully') {
          Swal.fire({
            icon: 'success',
            title: 'Added Successfully!',
            text: 'Your note has been added.',
            showConfirmButton: true,
            timer: 2000,
          }).then(() => {
            this.addNoteForm.reset();
          });
        }
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.message || 'Something went wrong!',
        });
      },
    });
  }

  get f() {
    return this.addNoteForm.controls;
  }
}
