import { Component } from '@angular/core';
import { DocumentCategoryModel } from '../documentcategory/documentcategory.component.model';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-document-category',
  templateUrl: './edit-document-category.component.html',
  styleUrls: ['./edit-document-category.component.css']
})
export class EditDocumentCategoryComponent {
  complianceForm !: FormGroup;
  SearchText : any ;

  page = 1;
  pageSize = 10 ;
  dataarray: DocumentCategoryModel [] = [];
  currentPage: number = 1;
  countries: DocumentCategoryModel [] | undefined;
  collectionSize =100;
  id!:number;
  cname:any;
  types:any;
  tnames:string[]=[];
  userForm !: FormGroup ;
  complianceFormData={
      tname:''
  }
  typeName!:string;
  addTypes={
    documentCategoryId:0,
    types:[] as string[]
  }
  constructor( private formBuilder: FormBuilder, private apiService:ApiService, private route:ActivatedRoute) {
    this.complianceForm = this.formBuilder.group({
      id: ['', Validators.required], // Add validation if needed
      name: ['', Validators.required], // Add validation if needed
      tname: ['', Validators.required], // Add validation if needed
    });
  
// this.userForm = this.formBuilder.group({
//   // name: [],
//   tname: this.formBuilder.array([
//     this.formBuilder.control(null)
//   ])
// })
  }


  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.apiService.DocCategoryTypesById(this.id).subscribe(
      (res:any)=>{
        this.types = res.docType
        console.log('data...' , res.docType);
        
        this.cname = res.docType[0].categoryName;
        this.complianceForm.patchValue({
          id : res.docType[0].cid ,
          name : res.docType[0].name 
        })
      },
      (err:any)=>{console.error(err);}
    )
  }
  reset(){
    // window.location.reload();
  }

  addType() {
    this.addTypes.documentCategoryId = this.id;
    this.complianceFormData=this.complianceForm.value;
    this.addTypes.types.push(this.complianceFormData.tname);
    this.apiService.addType(this.addTypes).subscribe(
      (res: any) => {
        console.log(res);
        Swal.fire({
          title: "Record Added!",
          icon: "success"
        });
      },
      (err: any) => {
        console.error(err);
        Swal.fire({
          title: "Error!",
          icon: "error"
        });
      }
    );
    // setInterval(()=>{window.location.reload()},1000);
  }







applyFilter(): void {
  const searchString = this.SearchText.toLowerCase();
  const filteredData = [...this.dataarray];
  // this.dataarray = filteredData.filter((data) =>
  //   data.branchname.toLowerCase().includes(searchString) ||
  //   data.branchcode.toLowerCase().includes(searchString) ||
  //   data.branchcity.toLowerCase().includes(searchString) ||
  //   data.branchaddress.toLowerCase().includes(searchString)
  // );
}
refreshCountries() {
  this.countries = this.dataarray
    .map((country, i) => ({id: i + 1, ...country}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}


addTypeNew(): void {
  (this.userForm.get('tname') as FormArray).push(
    this.formBuilder.control('nameiiiiiiiiiiii')
  );
  var data = this.userForm.value
  console.log("data::::::::::" , data );
  
}


getTypesFormControls(): AbstractControl[] {
  return (<FormArray> this.userForm.get('tname')).controls
}
}
