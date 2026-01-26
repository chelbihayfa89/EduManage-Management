import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Course } from 'src/app/models/course.model';
import { JwtPayload } from 'src/app/models/jwt-payload.model';
import { Note } from 'src/app/models/note.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CourseService } from 'src/app/services/course/course.service';
import { NoteService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css'],
})
export class StudentDashboardComponent implements OnInit {
  student: JwtPayload | null = null;
  courses: Course[] | null = null;
  selectedCourseIndex: number = -1;
  selectedCourse: Course | null = null;
  note: Note | null = null;
  constructor(
    private authService: AuthService,
    private courseService: CourseService,
    private noteService: NoteService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.student = jwtDecode<JwtPayload>(token);
    }

    this.courseService.getCoursesByStudent().subscribe({
      next: (res) => {
        if (res.courses) {
          this.courses = res.courses;
        }
      },
      error: (err) => {
        console.error(err.error.message);
      },
    });
  }

  selecteCourse(i: number): void {
    this.selectedCourseIndex = i;

    this.selectedCourse = this.courses
      ? this.courses[this.selectedCourseIndex]
      : null;

    if (!this.selectedCourse?._id) {
      return;
    }

    this.noteService.getCourseNote(this.selectedCourse._id).subscribe({
      next: (res) => {
        this.note = res.note;
      },
      error: (err) => {
        console.error(err.error.message);
      },
    });
  }

  getNoteClass(note: number | undefined): string {
    if (note === undefined || note === null) {
      return ''; // pas de classe si pas de note
    }
    if (note >= 15) {
      return 'note-high';
    } else if (note >= 10) {
      return 'note-medium';
    }
    return 'note-low';
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
