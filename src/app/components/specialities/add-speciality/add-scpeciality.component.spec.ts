import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScpecialityComponent } from './add-scpeciality.component';

describe('AddScpecialityComponent', () => {
  let component: AddScpecialityComponent;
  let fixture: ComponentFixture<AddScpecialityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScpecialityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddScpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
