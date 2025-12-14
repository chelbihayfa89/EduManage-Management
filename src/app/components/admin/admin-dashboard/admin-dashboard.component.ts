import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users: User[] = [
    {
      firstName: 'Ahmed',
      lastName: 'Ben Ali',
      email: 'ahmed@gmail.com',
      phone: '+216 25 123 456',
      address: 'Tunis',
      role: 'Teacher',
      status: 'Validated'
    },
    {
      firstName: 'Sarah',
      lastName: 'Khaled',
      email: 'sarah@gmail.com',
      phone: '+216 98 654 321',
      address: 'Sfax',
      role: 'Student',
      status: 'Validated'
    },
    {
      firstName: 'Mohamed',
      lastName: 'Trabelsi',
      email: 'mohamed@gmail.com',
      phone: '+216 22 987 654',
      address: 'Sousse',
      role: 'Parent',
      status: 'Validated'
    },
    {
      firstName: 'Fatma',
      lastName: 'Mansour',
      email: 'fatma@gmail.com',
      phone: '+216 55 456 789',
      address: 'Sfax',
      role: 'Teacher',
      status: 'Validated'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
