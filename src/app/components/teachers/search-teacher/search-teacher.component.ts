import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-teacher',
  templateUrl: './search-teacher.component.html',
  styleUrls: ['./search-teacher.component.css'],
})
export class SearchTeacherComponent implements OnInit {
  showBanner: boolean = true;
  @Input() title: string = 'Search Teacher';
  criteria = {speciality: ''};
  specialities: string[] = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'English',
    'History',
    'Geography',
    'Computer Science',
    'Physical Education',
    'Art',
    'Music',
    'Economics',
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}
  searchTeacher() {
    console.log(this.criteria);
    this.router.navigate(['teachers/search'], { queryParams: this.criteria });
  }
}
