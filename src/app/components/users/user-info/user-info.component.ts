import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  @Input() title: string = `Profile Info`;
  user: User = {};
  id: string = '';
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.userService.getUserById(this.id).subscribe({
      next: (res) => {
        if (res.user) {
          this.user = res.user;
        }
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
}
