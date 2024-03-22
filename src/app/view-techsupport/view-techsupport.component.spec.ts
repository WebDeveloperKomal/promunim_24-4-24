import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTechsupportComponent } from './view-techsupport.component';

describe('ViewTechsupportComponent', () => {
  let component: ViewTechsupportComponent;
  let fixture: ComponentFixture<ViewTechsupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTechsupportComponent]
    });
    fixture = TestBed.createComponent(ViewTechsupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
