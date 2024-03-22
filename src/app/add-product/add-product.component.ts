import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsModel } from '../products/products.component.model';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  addproductForm !: FormGroup;
  dataarray: any[] = [];
  product:ProductsModel = new ProductsModel();

  constructor(private formBuilder: FormBuilder,private apiService:ApiService) {
    this.addproductForm = this.formBuilder.group({
      productId: ['', Validators.required], // Add validation if needed
      productName: ['', Validators.required], // Add validation if needed
      minValue: ['', Validators.required],
      maxValue: ['', Validators.required]  // Add validation if needed
    });
  }


  onSubmit(){
    this.apiService.addProduct(this.product).subscribe(
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
