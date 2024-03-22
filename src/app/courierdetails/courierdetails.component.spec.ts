import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierdetailsComponent } from './courierdetails.component';

describe('CourierdetailsComponent', () => {
  let component: CourierdetailsComponent;
  let fixture: ComponentFixture<CourierdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourierdetailsComponent]
    });
    fixture = TestBed.createComponent(CourierdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
