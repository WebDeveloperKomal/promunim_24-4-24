import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddDailyleadsComponent } from './view-add-dailyleads.component';

describe('ViewAddDailyleadsComponent', () => {
  let component: ViewAddDailyleadsComponent;
  let fixture: ComponentFixture<ViewAddDailyleadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAddDailyleadsComponent]
    });
    fixture = TestBed.createComponent(ViewAddDailyleadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
