import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOtherServicesComponent } from './add-other-services.component';

describe('AddOtherServicesComponent', () => {
  let component: AddOtherServicesComponent;
  let fixture: ComponentFixture<AddOtherServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOtherServicesComponent]
    });
    fixture = TestBed.createComponent(AddOtherServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
