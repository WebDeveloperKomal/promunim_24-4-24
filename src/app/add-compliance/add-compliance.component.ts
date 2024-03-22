import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComplianceModel } from '../compliance/compliance.component.model';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-compliance',
  templateUrl: './add-compliance.component.html',
  styleUrls: ['./add-compliance.component.css']
})

export class AddComplianceComponent {
  complianceForm !: FormGroup;
  dataarray: any;

  compliance: ComplianceModel = new ComplianceModel;
  taxData=[{
    taxTypeName:''
  }]

  constructor(private formBuilder: FormBuilder,private apiService: ApiService) {

    this.complianceForm = this.formBuilder.group({
      complianceName: ['', Validators.required], // Add validation if needed
      taxLink: ['', Validators.required], // Add validation if needed
      complianceDueDate: ['', Validators.required] // Add validation if needed
    });
  }

  ngOnInit(){
    this.apiService.getTaxLink().subscribe(
      (res:any)=>{
        this.taxData=res.data;
      },
      (error:any)=>{
        console.error(error); }
    );
  }

  onSubmit()
  {    
    this.apiService.addCompliance(this.compliance).subscribe(
      (response:any)=>{
        console.log(response.data);    
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
