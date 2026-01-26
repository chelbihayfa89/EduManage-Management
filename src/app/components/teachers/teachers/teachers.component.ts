import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher.model';
import { TeacherService } from 'src/app/services/teacher/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})
export class TeachersComponent implements OnInit {
  title: string = 'Our Teachers';
  url: string = '';
  speciality: string = '';
  @Input() showBanner: boolean = true;
  @Input() limit: number = 0;

  teachers: Teacher[] = [];
  constructor(
    private ar: ActivatedRoute,
    private router: Router,
    private teacherService: TeacherService,
  ) {}

  ngOnInit(): void {
    this.url = this.router.url;
    this.speciality = this.ar.snapshot.queryParamMap.get('speciality') || '';
    if (this.url.startsWith('/teachers/search')) {
      this.teacherService.getTeachersBySpeciality(this.speciality).subscribe({
        next: (res) => {
          this.teachers = res.teachers;
        },
        error: (err) => {
          console.error(err.error.message);
        },
      });
    } else {
      this.teacherService.getAllTeachers().subscribe({
        next: (res) => {
          this.teachers = res.teachers;
          if (this.limit) {
            this.teachers = this.teachers.slice(0, this.limit);
          }
        },
        error: (err) => {
          console.error(err.error.message);
        },
      });
    }
  }
}
