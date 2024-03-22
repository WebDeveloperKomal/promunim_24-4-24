import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDailyVisitComponent } from './all-daily-visit.component';

describe('AllDailyVisitComponent', () => {
  let component: AllDailyVisitComponent;
  let fixture: ComponentFixture<AllDailyVisitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllDailyVisitComponent]
    });
    fixture = TestBed.createComponent(AllDailyVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
