import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  title: string = 'Sign-Up';
  role: string = '';
  emailErrMsg: string="";
  childPhoneErrMsg: string="";
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
    'Economics',
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  registerForm = this.fb.group({
    role: [this.role],
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^\d+$/),
      ],
    ],
    address: ['', [Validators.required, Validators.minLength(3)]],
    password: [
      '',
      [Validators.required, Validators.pattern('^[A-Za-z\\d]{6,12}$')],
    ],
    childPhone: ['', [Validators.minLength(8), Validators.pattern(/^\d+$/)]],
    speciality: [''],
  });
  ngOnInit(): void {
    this.role = this.route.snapshot.paramMap.get('role') || '';
    console.log(this.role);
    if (this.role == 'parent') {
      this.registerForm
        .get('childPhone')
        ?.setValidators([
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^\d+$/),
        ]);
    }
    if (this.role === 'teacher') {
      this.registerForm.get('speciality')?.setValidators([Validators.required]);
    }
    this.registerForm.get('childPhone')?.updateValueAndValidity();
    this.registerForm.get('speciality')?.updateValueAndValidity();
  }
  signup() {
    this.registerForm.patchValue({ role: this.role });
    console.log(this.registerForm.value);

    this.authService.register(this.registerForm.value).subscribe({
      next: (res) => {
        console.log(res.message);
        Swal.fire({
          icon: 'success',
          title: 'Added Successfully!',
          text: 'added',
          showConfirmButton: true,
          timer: 2000,
        }).then((result) => {
          if (result.isConfirmed) {
           this.router.navigate(['/login']);
          }
        });
      },
      error: (err) => {
        console.log(err);
        if (err.status === 409) {
          this.emailErrMsg = 'cet email existe deja ';
        }
        if (err.status === 400) {
          this.childPhoneErrMsg = err.error.message;
        }
      },
    });
  }
  get f() {
    return this.registerForm.controls;
  }
}
