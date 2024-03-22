import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddDailyvisitComponent } from './view-add-dailyvisit.component';

describe('ViewAddDailyvisitComponent', () => {
  let component: ViewAddDailyvisitComponent;
  let fixture: ComponentFixture<ViewAddDailyvisitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAddDailyvisitComponent]
    });
    fixture = TestBed.createComponent(ViewAddDailyvisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
