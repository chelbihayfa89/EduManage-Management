import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SchoolClass } from 'src/app/models/school-class.model';
import { SchoolClassService } from 'src/app/services/school-class/school-class.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-school-class',
  templateUrl: './add-school-class.component.html',
  styleUrls: ['./add-school-class.component.css'],
})
export class AddSchoolClassComponent implements OnInit {
  showBanner: boolean = true;
  @Input() title: string = 'Add a New Class';

  schoolClass: SchoolClass = {};
  constructor(private schoolClassService: SchoolClassService) {}

  ngOnInit(): void {
    
  }
  addClass(f: NgForm) {
    if (f.invalid) return;
    this.schoolClassService.addSchoolClass(this.schoolClass).subscribe({
      next: (res) => {
        Swal.fire({
          icon: 'success',
          title: 'Added Successfully!',
          text: res.message,
          showConfirmButton: true,
          timer: 2000,
        }).then(() => {
          f.reset();
          this.schoolClass = {};
        });
      },
    });
  }
}
