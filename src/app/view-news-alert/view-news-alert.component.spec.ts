import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewsAlertComponent } from './view-news-alert.component';

describe('ViewNewsAlertComponent', () => {
  let component: ViewNewsAlertComponent;
  let fixture: ComponentFixture<ViewNewsAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewNewsAlertComponent]
    });
    fixture = TestBed.createComponent(ViewNewsAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
