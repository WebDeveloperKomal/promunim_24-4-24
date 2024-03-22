import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddTIDModel } from './add-tid.component.model';
import { ApiService } from '../api.service';
import { NewCustomerModel } from '../new-customers/new-customers.component.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-tid',
  templateUrl: './add-tid.component.html',
  styleUrls: ['./add-tid.component.css']
})
export class AddTIDComponent {
  complianceForm !: FormGroup;

  tempcusList: NewCustomerModel[]=[];

  
  tid: AddTIDModel = new AddTIDModel();
  

  constructor(private formBuilder: FormBuilder,private apiService: ApiService) {
    this.complianceForm = this.formBuilder.group({
      customerId: ['', Validators.required], // Add validation if needed
      aofNo: ['', Validators.required], // Add validation if needed
      status: ['', Validators.required], // Add validation if needed
      courierId: ['', Validators.required] // Add validation if needed
    });
  }

ngOnInit(){
  this.apiService.allTempCustomers().subscribe(
    ( data: any) => {
      this.tempcusList=data.data;
      console.log('Response successful!');
      console.log(this.tempcusList);
    },
    (error:any) => {
      console.error('API Error:', error);
    }
  );
}
  
onSubmit(){ 
    let newtid = {
      customerId:this.tid.customerId,
      aofNo:this.tid.aofNo,
      status:this.tid.status,
      courierId:this.tid.courierId,
    }   
    console.log('TID ready to send::::: ',newtid);
    this.apiService.addtid(newtid).subscribe(
      (response:any)=>{
        console.log(response.data);
        Swal.fire({
          title: "Record Added!",
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
}
