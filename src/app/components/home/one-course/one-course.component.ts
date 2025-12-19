import { Component, OnInit, Input} from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-one-course',
  templateUrl: './one-course.component.html',
  styleUrls: ['./one-course.component.css']
})
export class OneCourseComponent implements OnInit {
@Input() c!: Course;
  constructor() { }

  ngOnInit(): void {
  }

}
