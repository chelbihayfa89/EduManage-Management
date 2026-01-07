import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  title: string = 'Sign-Up';
  role!: string;
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
    'Economics'
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  registerForm = this.fb.group({
    fname: ['', [Validators.required, Validators.minLength(3)]],
    lname: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^d+$/),
      ],
    ],
    adr: ['', [Validators.required, Validators.minLength(3)]],
    password: [
      '',
      [Validators.required, Validators.pattern('^[A-Za-z\\d]{6,12}$')],
    ],
    childPhone: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^d+$/),
      ],
    ],
    speciality: ['', Validators.required],
  });
  ngOnInit(): void {
    this.role = this.route.snapshot.paramMap.get('role') || '';
    console.log(this.role);
   
  }
  signup() {
    this.authService.register(this.registerForm.value).subscribe();
  }
  get f() {
    return this.registerForm.controls;
  }
}
