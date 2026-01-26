import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
showBanner: boolean = true;
@Input() title: string = 'Contact Us';
  constructor() { }

  ngOnInit(): void {
  }

}
