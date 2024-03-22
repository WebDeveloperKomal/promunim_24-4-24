import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCustomerListComponent } from './all-customer-list.component';

describe('AllCustomerListComponent', () => {
  let component: AllCustomerListComponent;
  let fixture: ComponentFixture<AllCustomerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCustomerListComponent]
    });
    fixture = TestBed.createComponent(AllCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
