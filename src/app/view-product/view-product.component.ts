import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsModel } from '../products/products.component.model';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {

  viewproductForm !: FormGroup;
  dataarray: any[] = [];
  data:ProductsModel = new ProductsModel();
  product:ProductsModel = new ProductsModel();
  id!:number;

  constructor(private formBuilder: FormBuilder, private apiService:ApiService, private route:ActivatedRoute) {
    this.viewproductForm = this.formBuilder.group({
      productId: ['', Validators.required], // Add validation if needed
      productName: ['', Validators.required], // Add validation if needed
      minValue: ['', Validators.required],
      maxValue: ['', Validators.required]
    
    });
  }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.apiService.ProductById(this.id).subscribe(
      (res:any)=>{
        this.data = res.data;
        console.log("data",res.data );
        
        this.product.productId = this.data.productId;
        this.product.productName = this.data.productName;
        this.product.minValue = this.data.minValue;
        this.product.maxValue = this.data.maxValue;
        this.viewproductForm.patchValue({
          productName: res.data[0].productName
          ,
          productId:  res.data[0].productId , 
          minValue: res.data[0].minValue ,
          maxValue:  res.data[0].maxValue , 

           
        })
      },
      (err:any)=>{console.error(err);}
    )
  }
  reset(){
    // window.location.reload();
  }

  onSubmit(){
    console.log(this.product);    
    this.apiService.updateProduct(this.product).subscribe(
      (res:any)=>{
        console.log(res.data);
        Swal.fire({
          title: "Record Updated!",
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
