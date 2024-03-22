import { Component } from '@angular/core';
import { ProductFeesModel } from './productfees.component.model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productfees',
  templateUrl: './productfees.component.html',
  styleUrls: ['./productfees.component.css']
})
export class ProductfeesComponent {
  SearchText : any ;
  page = 1;
  pageSize = 10 ;
  dataarray: ProductFeesModel [] = [];
  currentPage: number = 1;
  countries: ProductFeesModel [] | undefined;
  collectionSize =100;
  userRole:any;
  ProductFeeList:ProductFeesModel[]=[];
  OriginalProductFeesList : ProductFeesModel[] = [] ;

  permissions: any;
  Perstring:any;
  insertproductfees!:boolean;
  deleteproductfees!:boolean;
  updateproductfees!:boolean;
  view!:boolean;
  viewRM!:boolean;
  viewbranch!:boolean;
  viewall!:boolean;
  
  constructor(private apiService:ApiService, private router:Router) {}

ngOnInit(){
  this.Perstring = localStorage.getItem('permissions');
  if (this.Perstring) {
    this.permissions = JSON.parse(this.Perstring);
    this.permissions.forEach((permission: number) => {
      if (permission === 1133){this.insertproductfees = true};
      if (permission === 1134){this.deleteproductfees = true};
      if (permission === 1135){this.updateproductfees = true};
      if (permission === 1136){this.view = true};
      if (permission === 1137){this.viewRM = true};
      if (permission === 1138){this.viewbranch = true};
      if (permission === 1139){this.viewall = true};
    });
  } else {
    console.log('No permissions data found in local storage.');
  };

  this.allProductFees() ;
}


allProductFees(){
  
  this.apiService.allProductfees().subscribe(
    (response:any)=>{
      this.OriginalProductFeesList = response.data;
      this.ProductFeeList = this.OriginalProductFeesList ;
      this.collectionSize = response.data.length;
     
    },
    (error:any)=>{
      console.error(error);
    }
    )
}

edit(id:any){
  this.router.navigate(['/set/view-product-fees/'+id]);
}


delete(id:any){
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
    }).then((result) => {
    if (result.isConfirmed) 
    {
      this.apiService.deleteProductfees(id).subscribe(
      (response:any)=>{
        console.log(response.data);      
        Swal.fire({
          title: "Record Deleted!",
          icon: "success"
        });
      },
      (error:any)=>{
        console.error(error);
        Swal.fire({
          title: "Error!",
          icon: "error"
        });
      }
      );
      // setInterval(()=>{window.location.reload()},1000);        
    }
    });

}




applyFilter(): void {
  const searchString = this.SearchText.toLowerCase();
  // const filteredData = [...this.ProductFeeList];
  this.ProductFeeList = this.OriginalProductFeesList.filter((data) =>
    data.productName.toLowerCase().includes(searchString) ||
    data.areaType.toLowerCase().includes(searchString) ||
    (data.productId !== null && !isNaN(data.productId) && data.productId.toString().includes(searchString)) ||
    (data.minValue !== null && !isNaN(data.minValue) && data.minValue.toString().includes(searchString)) ||
    (data.maxValue !== null && !isNaN(data.maxValue) && data.maxValue.toString().includes(searchString)) ||
    (data.fees !== null && !isNaN(data.fees) && data.fees.toString().includes(searchString))
    // productFeeId : any;
    // productId: any;
    // productName: any;
    // minValue: any;
    // maxValue: any;
    // areaTypeId: any;
    // areaType: any;
    // fees: any;

  );
}
refreshCountries() {
  this.countries = this.ProductFeeList
    .map((country, i) => ({id: i + 1, ...country}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}


}
