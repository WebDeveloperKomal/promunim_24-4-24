import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddNewCustModel } from './add-new-customer.component.model';
import { ApiService } from '../api.service';
import { ProductsModel } from '../products/products.component.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.css']
})
export class AddNewCustomerComponent {
  SearchText : any ;

  page = 1;
  pageSize = 10 ;
  dataarray: AddNewCustModel[] = [];
  currentPage: number = 1;
  countries: AddNewCustModel[] | undefined;
  collectionSize =100;
  addnewcustomer !: FormGroup;
  newCust:AddNewCustModel = new AddNewCustModel();
  products:ProductsModel[]=[];

  constructor(private formBuilder: FormBuilder, private apiService:ApiService) {
    this.addnewcustomer = this.formBuilder.group({
      companyName: ['', Validators.required], 
      customerFullName: ['', Validators.required], 
      emailId: ['', Validators.required] ,
      contactNo: ['', Validators.required],
      altContactNo: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      pinCode: ['', Validators.required],
      constitutionOfCompany: ['', Validators.required],
      segment: ['', Validators.required],
      natureOfBussiness: ['', Validators.required],
      maintainingITR: ['', Validators.required],
      leadType: ['', Validators.required],
      leadStatus: ['', Validators.required],
      productId: ['', Validators.required],
     
    });
  }

  ngOnInit(){
    this.apiService.allProducts().subscribe(
      (res:any)=>{this.products = res.data},
      (err:any)=>{console.error(err);}
    )
  }


  onSubmit(){
    this.apiService.addNewCustomer(this.newCust).subscribe(
      (res:any)=>{
        console.log(res.status);
        Swal.fire({
          title: "Record Saved!",
          icon: "success"
        }); 
      },
      (err:any)=>{
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
}
