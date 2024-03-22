import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomerInfoComponent } from './new-customer-info.component';

describe('NewCustomerInfoComponent', () => {
  let component: NewCustomerInfoComponent;
  let fixture: ComponentFixture<NewCustomerInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCustomerInfoComponent]
    });
    fixture = TestBed.createComponent(NewCustomerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
