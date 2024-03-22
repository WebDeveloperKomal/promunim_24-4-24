


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TidgenerationComponent } from './tidgeneration.component';

describe('TidgenerationComponent', () => {
  let component: TidgenerationComponent;
  let fixture: ComponentFixture<TidgenerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TidgenerationComponent]
    });
    fixture = TestBed.createComponent(TidgenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
