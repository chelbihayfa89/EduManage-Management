import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-our-teachers',
  templateUrl: './our-teachers.component.html',
  styleUrls: ['./our-teachers.component.css'],
})
export class OurTeachersComponent implements OnInit {
  title: string = 'Our Teachers';
  @Input() showBanner: boolean = true;
  teachers: User[] = [
    {
      id: "1",
      firstName: 'Ahmed',
      lastName: 'Ben Ali',
      email: 'ahmed.benali@email.com',
      phone: '20123456',
      address: 'Tunis',
      role: 'Admin',
      status: 'Validated',
    },
    {
      id: "2",
      firstName: 'Sarra',
      lastName: 'Trabelsi',
      email: 'sarra.trabelsi@email.com',
      phone: '55112233',
      address: 'Sousse',
      role: 'Teacher',
      status: 'Validated',
    },
    {
      id: "3",
      firstName: 'Youssef',
      lastName: 'Mansour',
      email: 'youssef.mansour@email.com',
      phone: '99887766',
      address: 'Sfax',
      role: 'Teacher',
      status: 'Not Validated',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
