import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SpecialityService } from 'src/app/services/speciality/speciality.service';

@Component({
  selector: 'app-edit-speciality',
  templateUrl: './edit-speciality.component.html',
  styleUrls: ['./edit-speciality.component.css'],
})
export class EditSpecialityComponent implements OnInit {
  @Input() title: string = 'Edit Speciality';
  showBanner: boolean = true;

  speciality: { name: string } = { name: '' };
  constructor(
    private specialityService: SpecialityService,
    private ar: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const specialityId: string = this.ar.snapshot.paramMap.get('id') || '';
    this.specialityService.getSpecialityById(specialityId).subscribe({
      next: (res) => {
        this.speciality = res.speciality;
      },
    });
  }
  editSpeciality(f: NgForm) {
    if (f.invalid) return;
  }
}
