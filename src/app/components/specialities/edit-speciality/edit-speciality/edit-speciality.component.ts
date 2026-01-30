import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SpecialityService } from 'src/app/services/speciality/speciality.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-speciality',
  templateUrl: './edit-speciality.component.html',
  styleUrls: ['./edit-speciality.component.css'],
})
export class EditSpecialityComponent implements OnInit {
  @Input() title: string = 'Edit Speciality';
  showBanner: boolean = true;

  speciality: { name: string } = { name: '' };
  specialityId: string = '';
  constructor(
    private specialityService: SpecialityService,
    private ar: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.specialityId = this.ar.snapshot.paramMap.get('id') || '';
    this.specialityService.getSpecialityById(this.specialityId).subscribe({
      next: (res) => {
        this.speciality = res.speciality;
      },
    });
  }
  updateSpeciality(f: NgForm) {
    if (f.invalid) return;
    this.specialityService
      .updateSpecialitty(f.value, this.specialityId)
      .subscribe({
        next: (res) => {
          Swal.fire({
            title: 'Good job!',
            text: res.message,
            icon: 'success',
          }).then(() => {
            f.reset();
            this.speciality = { name: '' };
          });
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.error?.message || 'Something went wrong!',
          });
        },
      });
  }
}
