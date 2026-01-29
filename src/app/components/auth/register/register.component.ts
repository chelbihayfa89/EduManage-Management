import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SpecialityService } from 'src/app/services/speciality/speciality.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  title: string = 'Sign-Up';
  role: string = '';
  emailErrMsg: string = '';
  childPhoneErrMsg: string = '';
  selectedFile: File | null = null;
  specialities: {_id: string, name: string}[] = [];
  
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    private specialityService: SpecialityService,
    private router: Router,
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
    this.specialityService
      .getSpecialities()
      .subscribe({ next: (res) => {
        this.specialities = res.specialities;
      }, error: () => {} });
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
    const formData = new FormData();
    Object.keys(this.registerForm.value).forEach((key) => {
      formData.append(key,  this.registerForm.value[key as keyof typeof this.registerForm.value] as string);
    });
    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    this.authService.register(formData).subscribe({
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
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log(this.selectedFile);
    }
  }
  get f() {
    return this.registerForm.controls;
  }
}
