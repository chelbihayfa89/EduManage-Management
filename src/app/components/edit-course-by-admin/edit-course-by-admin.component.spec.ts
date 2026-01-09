import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseByAdminComponent } from './edit-course-by-admin.component';

describe('EditCourseByAdminComponent', () => {
  let component: EditCourseByAdminComponent;
  let fixture: ComponentFixture<EditCourseByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCourseByAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCourseByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
