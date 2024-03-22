import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOtherServicesComponent } from './view-other-services.component';

describe('ViewOtherServicesComponent', () => {
  let component: ViewOtherServicesComponent;
  let fixture: ComponentFixture<ViewOtherServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewOtherServicesComponent]
    });
    fixture = TestBed.createComponent(ViewOtherServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
