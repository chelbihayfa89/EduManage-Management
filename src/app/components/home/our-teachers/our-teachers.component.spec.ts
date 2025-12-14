import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeachersComponent } from './our-teachers.component';

describe('OurTeachersComponent', () => {
  let component: OurTeachersComponent;
  let fixture: ComponentFixture<OurTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurTeachersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
