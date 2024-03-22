import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductfeesComponent } from './productfees.component';

describe('ProductfeesComponent', () => {
  let component: ProductfeesComponent;
  let fixture: ComponentFixture<ProductfeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductfeesComponent]
    });
    fixture = TestBed.createComponent(ProductfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
