import { Component } from '@angular/core';
import { AddCustComplMainModel } from './add-customer-complaints-main.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-customer-complaints-main',
  templateUrl: './add-customer-complaints-main.component.html',
  styleUrls: ['./add-customer-complaints-main.component.css']
})
export class AddCustomerComplaintsMainComponent {
  complianceForm !: FormGroup;

  page = 1;
  pageSize = 10 ;
  dataarray: AddCustComplMainModel[] = [];
  currentPage: number = 1;
  countries: AddCustComplMainModel[] | undefined;
  collectionSize =100;

  addComplaints : AddCustComplMainModel =new AddCustComplMainModel(); 
 

allCust=[{
  accountNo :0, 
  companyName : ""
}]



  constructor(private formBuilder: FormBuilder , private apiService: ApiService , private route: ActivatedRoute ) {

    this.complianceForm = this.formBuilder.group({
      accountNo: ['', Validators.required], // Add validation if needed
      subject: ['', Validators.required], // Add validation if needed
      description: ['', Validators.required] // Add validation if needed
    });
    
  }

  ngOnInit() {
    this.apiService.alltempCustomer().subscribe(
      (data: any) => {
        this.allCust = data.data;
        console.log('allCust send::::: ',this.allCust);
        console.log('Response successful!');
      },
      (error: any) => {
        console.error('API Error:', error);
      }
    )
  }

  onSubmit(){ 

    console.log('replay send::::: ',this.addComplaints.accountNo);
    this.apiService.addComplaints(this.addComplaints).subscribe(
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
