import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsAlertComponent } from './add-news-alert.component';

describe('AddNewsAlertComponent', () => {
  let component: AddNewsAlertComponent;
  let fixture: ComponentFixture<AddNewsAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewsAlertComponent]
    });
    fixture = TestBed.createComponent(AddNewsAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
