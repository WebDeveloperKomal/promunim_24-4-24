import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { OtherServiceModel } from './otherServiceModel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-other-services',
  templateUrl: './add-other-services.component.html',
  styleUrls: ['./add-other-services.component.css']
})
export class AddOtherServicesComponent {
  complianceForm !: FormGroup;
  dataarray: any[] = [];
  maxId:any;

service:OtherServiceModel = new OtherServiceModel();

  constructor(private formBuilder: FormBuilder, private apiService:ApiService, ) {
    this.complianceForm = this.formBuilder.group({
      serviceName: ['', Validators.required], // Add validation if needed
      description: ['', Validators.required], // Add validation if needed
      fees: ['', Validators.required] // Add validation if needed
    });
  }

  onSubmit()
  {
    this.apiService.addOtherServices(this.service).subscribe(
      (response:any)=>{
        console.log(response);    
        Swal.fire({
          title: "Record Saved!",
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
    )
    // setInterval(()=>{window.location.reload()},1000);        
  }



}
