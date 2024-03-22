import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComplianceModel } from './view-compliance.component.model';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-compliance',
  templateUrl: './view-compliance.component.html',
  styleUrls: ['./view-compliance.component.css']
})
export class ViewComplianceComponent {

  complianceForm !: FormGroup;
  compliance:ComplianceModel = new ComplianceModel();
  taxData=[{
    taxTypeName:''
  }]
  id!:number;

  constructor(private formBuilder: FormBuilder, private apiService:ApiService, private route:ActivatedRoute,private datePipe: DatePipe) {
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
    this.id = this.route.snapshot.params['id'];
    this.apiService.complianceById(this.id).subscribe(
      (response:any)=>{
        this.compliance=response.data;      
        this.complianceForm.patchValue({
          complianceName: response.data[0].complianceName,
          taxLink: response.data[0].taxLink,
          // complianceDueDate: response.data[0].complianceDueDate,
          complianceDueDate : this.datePipe.transform(response.data[0].complianceDueDate, 'yyyy-MM-dd') || ''
          // complianceDueDate: this.convertDateTimeToDate( response.data[0].complianceDueDate)

        });
      },
      (error:any)=>{console.error(error);}
    )
  }

  reset(){
    // window.location.reload();
  }

  onSubmit()
  {
      let comp = {complianceId : this.id,
                complianceName: this.compliance.complianceName,
                taxLink: this.compliance.taxLink,
                complianceDueDate: this.compliance.complianceDueDate};
      console.log("comp :::::::::: ",comp);

      this.apiService.updateCompliance(comp).subscribe(
      (response:any)=>{
        console.log(response.data);
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

