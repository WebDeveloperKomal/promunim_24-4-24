import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RMWiseReportComponent } from './rmwise-report.component';

describe('RMWiseReportComponent', () => {
  let component: RMWiseReportComponent;
  let fixture: ComponentFixture<RMWiseReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RMWiseReportComponent]
    });
    fixture = TestBed.createComponent(RMWiseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
