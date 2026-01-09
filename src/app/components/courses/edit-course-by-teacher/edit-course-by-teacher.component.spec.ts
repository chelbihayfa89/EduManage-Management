import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseByTeacherComponent } from './edit-course-by-teacher.component';

describe('EditCourseByTeacherComponent', () => {
  let component: EditCourseByTeacherComponent;
  let fixture: ComponentFixture<EditCourseByTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCourseByTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCourseByTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
