import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTIDComponent } from './add-tid.component';

describe('AddTIDComponent', () => {
  let component: AddTIDComponent;
  let fixture: ComponentFixture<AddTIDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTIDComponent]
    });
    fixture = TestBed.createComponent(AddTIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
