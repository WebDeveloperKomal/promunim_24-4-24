import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewUserroleComponent } from './add-new-userrole.component';

describe('AddNewUserroleComponent', () => {
  let component: AddNewUserroleComponent;
  let fixture: ComponentFixture<AddNewUserroleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewUserroleComponent]
    });
    fixture = TestBed.createComponent(AddNewUserroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
