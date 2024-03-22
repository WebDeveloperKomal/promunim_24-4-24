import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComplianceComponent } from './view-compliance.component';

describe('ViewComplianceComponent', () => {
  let component: ViewComplianceComponent;
  let fixture: ComponentFixture<ViewComplianceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewComplianceComponent]
    });
    fixture = TestBed.createComponent(ViewComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
