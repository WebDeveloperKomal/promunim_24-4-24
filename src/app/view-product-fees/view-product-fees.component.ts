import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-product-fees',
  templateUrl: './view-product-fees.component.html',
  styleUrls: ['./view-product-fees.component.css']
})
export class ViewProductFeesComponent {
  feeForm !: FormGroup;
  dataarray: any[] = [];
  fee={productFeesId:0,fees:''};
  id!:number;

  constructor(private formBuilder: FormBuilder,private apiService:ApiService, private route:ActivatedRoute) {
    this.feeForm = this.formBuilder.group({      
      fees: ['', Validators.required] // Add validation if needed
    });
  }


  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.apiService.ProductfeesById(this.id).subscribe(
      (res:any)=>{console.log("dataaaaa",res.data);
        this.feeForm.patchValue({
          fees: res.data[0].fees
          // ,
          // productId:  res.data[0].productId , 
          // minValue: res.data[0].minValue ,
          // maxValue:  res.data[0].maxValue , 

           
        })
      },
      (err:any)=>{console.error(err);}
    )
  }


  onSubmit(){
    this.fee.productFeesId= this.id;
    this.apiService.updateProductfees(this.fee).subscribe(
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
