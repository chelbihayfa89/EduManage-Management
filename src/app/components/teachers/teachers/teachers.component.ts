import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})
export class TeachersComponent implements OnInit {
  title: string = 'Our Teachers';
  url!: string;
  speciality!: string;
  @Input() showBanner: boolean = true;

  teachers!: any;
  constructor(
    private ar: ActivatedRoute,
    private router: Router,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.url = this.router.url;
    this.speciality = this.ar.snapshot.queryParamMap.get('speciality') || '';
    console.log(this.url);
    console.log(this.speciality);
    if (this.url.startsWith('/teachers/search')) {
      this.teacherService.getTeachers(this.speciality).subscribe((res) => {
        console.log(res.teachers);
        this.teachers = res.teachers;
      });
    } else {
      this.teacherService.getTeachers().subscribe((res) => {
        this.teachers = res.teachers;
      });
    }
  }
}
