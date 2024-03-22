import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInteractionsComponent } from './all-interactions.component';

describe('AllInteractionsComponent', () => {
  let component: AllInteractionsComponent;
  let fixture: ComponentFixture<AllInteractionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllInteractionsComponent]
    });
    fixture = TestBed.createComponent(AllInteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
