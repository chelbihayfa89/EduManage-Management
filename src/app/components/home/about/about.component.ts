import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
title: string = "About Us";
@Input() showBanner: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
