import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { OtherServiceModel } from '../add-other-services/otherServiceModel';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-other-services',
  templateUrl: './view-other-services.component.html',
  styleUrls: ['./view-other-services.component.css']
})
export class ViewOtherServicesComponent {
  complianceForm !: FormGroup;
  dataarray: any[] = [];
  data:any;
  service:OtherServiceModel = new OtherServiceModel();
  id!:number;

  
  constructor(private formBuilder: FormBuilder, private apiService:ApiService, private route:ActivatedRoute) {
    this.complianceForm = this.formBuilder.group({
      serviceName: ['', Validators.required], // Add validation if needed
      description: ['', Validators.required], // Add validation if needed
      fees: ['', Validators.required] // Add validation if needed
    });
  }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.apiService.OtherServiceById(this.id).subscribe(
      (response:any)=>{
        console.log(response.data);        
        this.data=response.data;
        this.complianceForm.patchValue({
          serviceName : response.data.serviceName,
          description: response.data.description,
          fees : response.data.fees

         

        })},
      (error:any)=>{console.error(error);}
    )
  }
reset(){
  // window.location.reload();
}

  onSubmit()
  {
      this.service.serviceId= this.id;
      console.log(this.service);
      
      this.apiService.updateService(this.service).subscribe(
      (response:any)=>{
        console.log(response);
        Swal.fire({
          title: "Record Updated!",
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
