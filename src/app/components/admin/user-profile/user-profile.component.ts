import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  title: string = 'Profile Of';
  user!: User;
  users: User[] = [
    {
      id: '1',
      firstName: 'Hayfa',
      lastName: 'Chelbi',
      email: 'hayfa.admin@school.com',
      phone: '20123456',
      address: 'Kairouan',
      role: 'Admin',
      status: 'Validated',
    },
    {
      id: '2',
      firstName: 'Ali',
      lastName: 'Ben Salah',
      email: 'ali.teacher@school.com',
      phone: '22123456',
      address: 'Tunis',
      role: 'Teacher',
      status: 'Validated',
    },
    {
      id: '3',
      firstName: 'Sami',
      lastName: 'Trabelsi',
      email: 'sami.student@school.com',
      phone: '99123456',
      address: 'Sousse',
      role: 'Student',
      status: 'Not Validated',
    },
    {
      id: '4',
      firstName: 'Amira',
      lastName: 'Jebali',
      email: 'amira.parent@school.com',
      phone: '55123456',
      address: 'Monastir',
      role: 'Parent',
      status: 'Validated',
    },
  ];
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    const foundUser = this.users.find((u) => u.id == id);
    if (foundUser) {
      this.user = foundUser;
    }
    console.log(foundUser);
  }
}
