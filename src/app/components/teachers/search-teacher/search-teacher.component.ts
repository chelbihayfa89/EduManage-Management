import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpecialityService } from 'src/app/services/speciality/speciality.service';

@Component({
  selector: 'app-search-teacher',
  templateUrl: './search-teacher.component.html',
  styleUrls: ['./search-teacher.component.css'],
})
export class SearchTeacherComponent implements OnInit {
  showBanner: boolean = true;
  @Input() title: string = 'Search Teacher';
  criteria = { speciality: '' };
  specialities: { _id: string; name: string }[] = [];

  constructor(
    private router: Router,
    private specialityService: SpecialityService,
  ) {}

  ngOnInit(): void {
    this.specialityService.getSpecialities().subscribe({
      next: (res) => {
        this.specialities = res.specialities;
      },
    });
  }
  searchTeacher() {
    console.log(this.criteria);
    this.router.navigate(['teachers/search'], { queryParams: this.criteria });
  }
}
