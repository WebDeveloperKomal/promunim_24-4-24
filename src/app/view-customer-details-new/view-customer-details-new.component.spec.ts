import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerDetailsNewComponent } from './view-customer-details-new.component';

describe('ViewCustomerDetailsNewComponent', () => {
  let component: ViewCustomerDetailsNewComponent;
  let fixture: ComponentFixture<ViewCustomerDetailsNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCustomerDetailsNewComponent]
    });
    fixture = TestBed.createComponent(ViewCustomerDetailsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
