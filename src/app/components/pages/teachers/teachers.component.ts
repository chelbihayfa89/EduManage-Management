import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})
export class TeachersComponent implements OnInit {
  title: string = 'Our Teachers';
  @Input() showBanner: boolean = true;

  allTeachers: any = [];
  teachers!: any;
  constructor(private ar: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // const url = this.router.url;
    // const speciality = this.ar.snapshot.queryParamMap.get('speciality');

    // if (url.startsWith('/search/teachers') && speciality) {
    //   this.teachers = this.allTeachers.filter(
    //     (t) => t.speciality === speciality
    //   );
    // } else {
    //   this.teachers = this.allTeachers;
    // }
  }
}
