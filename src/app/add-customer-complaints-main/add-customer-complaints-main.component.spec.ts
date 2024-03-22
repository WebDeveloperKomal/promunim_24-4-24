import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerComplaintsMainComponent } from './add-customer-complaints-main.component';

describe('AddCustomerComplaintsMainComponent', () => {
  let component: AddCustomerComplaintsMainComponent;
  let fixture: ComponentFixture<AddCustomerComplaintsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCustomerComplaintsMainComponent]
    });
    fixture = TestBed.createComponent(AddCustomerComplaintsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
