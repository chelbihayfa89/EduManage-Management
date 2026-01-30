import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSchoolClassComponent } from './add-school-class.component';

describe('AddSchoolClassComponent', () => {
  let component: AddSchoolClassComponent;
  let fixture: ComponentFixture<AddSchoolClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSchoolClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSchoolClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
