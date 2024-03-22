import { Component } from '@angular/core';
import { DocumentCategoryModel } from './documentcategory.component.model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentcategory',
  templateUrl: './documentcategory.component.html',
  styleUrls: ['./documentcategory.component.css']
})
export class DocumentcategoryComponent {
  SearchText : any ;
  
  page = 1;
  pageSize = 10 ;
  dataarray: DocumentCategoryModel[] = [];
  currentPage: number = 1;
  countries: DocumentCategoryModel [] | undefined;
  collectionSize =100;

  DocumentCategoriesList:DocumentCategoryModel[]=[];
  OriginalDocumentCategoriesList : DocumentCategoryModel[] = [] ;
  
  constructor(private apiService:ApiService, private router:Router) {}

  ngOnInit(){
    this.allDocumentCategory();
  }

allDocumentCategory(){
  this.apiService.allDocumentCategories().subscribe(
    (response:any)=>{
      this.OriginalDocumentCategoriesList=response.docCategory;
      this.DocumentCategoriesList = this.OriginalDocumentCategoriesList ;
      this.collectionSize =response.docCategory.length;
    },
    (error:any)=>{
      console.error(error);        
    }
  )
}
  edit(id:any){
    this.router.navigate(['/set/edit-document-category/'+id]);
  }



  applyFilter(): void {
    const searchString = this.SearchText.toLowerCase();
    // const filteredData = [...this.DocumentCategoriesList];
    this.DocumentCategoriesList = this.OriginalDocumentCategoriesList.filter((data) =>
      // data.cid.toLowerCase().includes(searchString) ||
      data.name.toLowerCase().includes(searchString) ||
      (data.cid !== null && !isNaN(data.cid) && data.cid.toString().includes(searchString)) 
      // data.typeId.toLowerCase().includes(searchString) 
      
    );
  }
  refreshCountries() {
    this.countries = this.dataarray
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
