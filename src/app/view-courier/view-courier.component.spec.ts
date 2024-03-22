import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCourierComponent } from './view-courier.component';

describe('ViewCourierComponent', () => {
  let component: ViewCourierComponent;
  let fixture: ComponentFixture<ViewCourierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCourierComponent]
    });
    fixture = TestBed.createComponent(ViewCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
