import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  users: User[] = [
    {
      id: "1",
      firstName: 'Ahmed',
      lastName: 'Ben Ali',
      email: 'ahmed@gmail.com',
      phone: '+216 25 123 456',
      address: 'Tunis',
      role: 'Teacher',
      status: 'Validated',
    },
    {
      id: "2",
      firstName: 'Sarah',
      lastName: 'Khaled',
      email: 'sarah@gmail.com',
      phone: '+216 98 654 321',
      address: 'Sfax',
      role: 'Student',
      status: 'Validated',
    },
    {
      id: "3",
      firstName: 'Mohamed',
      lastName: 'Trabelsi',
      email: 'mohamed@gmail.com',
      phone: '+216 22 987 654',
      address: 'Sousse',
      role: 'Parent',
      status: 'Validated',
    },
    {
      id: "4",
      firstName: 'Fatma',
      lastName: 'Mansour',
      email: 'fatma@gmail.com',
      phone: '+216 55 456 789',
      address: 'Sfax',
      role: 'Teacher',
      status: 'Validated',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}
  viewUser(id: string) {
  this.router.navigate([`/admin/userProfile/${id}`]);
  }
}
