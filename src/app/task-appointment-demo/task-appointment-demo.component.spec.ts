import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAppointmentDemoComponent } from './task-appointment-demo.component';

describe('TaskAppointmentDemoComponent', () => {
  let component: TaskAppointmentDemoComponent;
  let fixture: ComponentFixture<TaskAppointmentDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskAppointmentDemoComponent]
    });
    fixture = TestBed.createComponent(TaskAppointmentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
