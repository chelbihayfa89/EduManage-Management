import { Component, OnInit, Input} from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-teacher-card',
  templateUrl: './teacher-card.component.html',
  styleUrls: ['./teacher-card.component.css']
})
export class TeacherCardComponent implements OnInit {
@Input() t!: User; 
  constructor() { }

  ngOnInit(): void {
  }

}
