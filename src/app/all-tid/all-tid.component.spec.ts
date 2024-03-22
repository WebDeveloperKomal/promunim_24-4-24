import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTIDComponent } from './all-tid.component';

describe('AllTIDComponent', () => {
  let component: AllTIDComponent;
  let fixture: ComponentFixture<AllTIDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTIDComponent]
    });
    fixture = TestBed.createComponent(AllTIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
