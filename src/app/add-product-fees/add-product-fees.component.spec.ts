import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductFeesComponent } from './add-product-fees.component';

describe('AddProductFeesComponent', () => {
  let component: AddProductFeesComponent;
  let fixture: ComponentFixture<AddProductFeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductFeesComponent]
    });
    fixture = TestBed.createComponent(AddProductFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
