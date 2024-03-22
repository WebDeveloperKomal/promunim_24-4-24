import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerComplaintsMainComponent } from './view-customer-complaints-main.component';

describe('ViewCustomerComplaintsMainComponent', () => {
  let component: ViewCustomerComplaintsMainComponent;
  let fixture: ComponentFixture<ViewCustomerComplaintsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCustomerComplaintsMainComponent]
    });
    fixture = TestBed.createComponent(ViewCustomerComplaintsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
