import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountopeningFormComponent } from './accountopening-form.component';

describe('AccountopeningFormComponent', () => {
  let component: AccountopeningFormComponent;
  let fixture: ComponentFixture<AccountopeningFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountopeningFormComponent]
    });
    fixture = TestBed.createComponent(AccountopeningFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
