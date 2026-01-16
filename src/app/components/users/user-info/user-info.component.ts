import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { TeacherService } from 'src/app/services/teacher/teacher.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  @Input() title: string = `Profile Info`;
  user: User = {};

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("Route param id:", id);
    if (id) {
      this.userService.getUserById(id).subscribe({
        next: (res) => {
          if (res.user) {
            this.user = res.user;
          }
        },
        error: (err) => {
          console.log(err.error.message);
        },
      });
    } else {
      this.userService.getProfile().subscribe({
        next: (res) => {
          if (res.user) {
            this.user = res.user;
            console.log("User", this.user);
          }
        },
      });
    }
  }
}
