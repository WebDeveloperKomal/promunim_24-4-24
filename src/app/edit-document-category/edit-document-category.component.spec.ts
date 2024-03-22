import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDocumentCategoryComponent } from './edit-document-category.component';

describe('EditDocumentCategoryComponent', () => {
  let component: EditDocumentCategoryComponent;
  let fixture: ComponentFixture<EditDocumentCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDocumentCategoryComponent]
    });
    fixture = TestBed.createComponent(EditDocumentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
