import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductFeesModel } from '../productfees/productfees.component.model';
import { ProductsModel } from '../products/products.component.model';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product-fees',
  templateUrl: './add-product-fees.component.html',
  styleUrls: ['./add-product-fees.component.css']
})
export class AddProductFeesComponent {
  addproductfees !: FormGroup;
  dataarray: any[] = [];
  products:ProductsModel[]=[]
  pFees={productId:'',branchClassificationId:'',fees:''};

  constructor(private formBuilder: FormBuilder, private apiService:ApiService) {
    this.addproductfees = this.formBuilder.group({
      productId: ['', Validators.required], // Add validation if needed
      branchClassificationId: ['', Validators.required], // Add validation if needed
      fees: ['', Validators.required] // Add validation if needed
    });
  }

  ngOnInit(){
    this.apiService.allProducts().subscribe(
      (res:any)=>{this.products=res.data},
      (err:any)=>{console.error(err);}
    )
  }


  onSubmit(){
    this.apiService.addProductfees(this.pFees).subscribe(
      (res:any)=>{
        console.log(res.data);
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


}
