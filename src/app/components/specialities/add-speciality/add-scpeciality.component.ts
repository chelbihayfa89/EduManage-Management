import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SpecialityService } from 'src/app/services/speciality/speciality.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-scpeciality',
  templateUrl: './add-scpeciality.component.html',
  styleUrls: ['./add-scpeciality.component.css'],
})
export class AddScpecialityComponent implements OnInit {
  showBanner: boolean = true;
  @Input() title: string = 'Add a New Speciality';
  speciality: { name: string } = { name: '' };
  constructor(private specialityService: SpecialityService) {}

  ngOnInit(): void {}
  addSpeciality(f: NgForm) {
    if (f.invalid) return;
    this.specialityService.addSpeciality(this.speciality).subscribe({
      next: (res) => {
        Swal.fire({
          icon: 'success',
          title: 'Added Successfully!',
          text: res.message,
          showConfirmButton: true,
          timer: 2000,
        }).then(() => {
          f.resetForm();
          this.speciality = { name: '' };
        });
      },
      error: (err) => {
        Swal.fire({
          title: 'Error!',
          text: err.error?.message || 'Something went wrong',
          icon: 'error',
        });
      },
    });
  }
}
