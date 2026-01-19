import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseByAdminComponent } from './add-course-by-admin.component';

describe('AddCourseByAdminComponent', () => {
  let component: AddCourseByAdminComponent;
  let fixture: ComponentFixture<AddCourseByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseByAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourseByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
