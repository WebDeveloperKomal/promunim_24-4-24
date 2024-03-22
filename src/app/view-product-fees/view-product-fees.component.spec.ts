import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductFeesComponent } from './view-product-fees.component';

describe('ViewProductFeesComponent', () => {
  let component: ViewProductFeesComponent;
  let fixture: ComponentFixture<ViewProductFeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProductFeesComponent]
    });
    fixture = TestBed.createComponent(ViewProductFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
