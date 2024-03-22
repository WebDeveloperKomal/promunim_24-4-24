import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComplaintsMainComponent } from './all-complaints-main.component';

describe('AllComplaintsMainComponent', () => {
  let component: AllComplaintsMainComponent;
  let fixture: ComponentFixture<AllComplaintsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllComplaintsMainComponent]
    });
    fixture = TestBed.createComponent(AllComplaintsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
