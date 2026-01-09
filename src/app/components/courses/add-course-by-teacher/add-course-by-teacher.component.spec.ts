import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseByTeacherComponent } from './add-course-by-teacher.component';

describe('AddCourseByTeacherComponent', () => {
  let component: AddCourseByTeacherComponent;
  let fixture: ComponentFixture<AddCourseByTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseByTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourseByTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
