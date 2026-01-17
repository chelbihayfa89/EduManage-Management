import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: User | null = null;
  userId!: string;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
  //   const storedId = localStorage.getItem('Id');
  //   if (storedId) {
  //     this.userId = JSON.parse(storedId);
  //   }
  //   this.userService.getUserById(this.userId).subscribe({
  //     next: (data) => {
  //       this.user = data.user;
  //     },
  //   });
  // }
  // getDashboardLink() {
  //   const routes = {
  //     admin: '/admin/dashboard',
  //     teacher: '/teacher/dashboard',
  //     student: '/student/dashboard',
  //     parent: '/parent/dashboard',
  //   };
  //   return routes[this.user?.role!] || '/';
  // }
  // logout() {
  //   localStorage.removeItem('Id');
  // }
}
}