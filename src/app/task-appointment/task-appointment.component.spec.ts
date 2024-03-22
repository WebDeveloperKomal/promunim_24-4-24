import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAppointmentComponent } from './task-appointment.component';

describe('TaskAppointmentComponent', () => {
  let component: TaskAppointmentComponent;
  let fixture: ComponentFixture<TaskAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskAppointmentComponent]
    });
    fixture = TestBed.createComponent(TaskAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
