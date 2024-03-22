import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldailyleadsComponent } from './alldailyleads.component';

describe('AlldailyleadsComponent', () => {
  let component: AlldailyleadsComponent;
  let fixture: ComponentFixture<AlldailyleadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlldailyleadsComponent]
    });
    fixture = TestBed.createComponent(AlldailyleadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
