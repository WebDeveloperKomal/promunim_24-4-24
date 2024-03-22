import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNewCustomerComponent } from './update-new-customer.component';

describe('UpdateNewCustomerComponent', () => {
  let component: UpdateNewCustomerComponent;
  let fixture: ComponentFixture<UpdateNewCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateNewCustomerComponent]
    });
    fixture = TestBed.createComponent(UpdateNewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
