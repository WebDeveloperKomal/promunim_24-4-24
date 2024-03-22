import { Component } from '@angular/core';
import { AllCOmplaintsMainModel } from './all-complaints-main.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-complaints-main',
  templateUrl: './all-complaints-main.component.html',
  styleUrls: ['./all-complaints-main.component.css']
})
export class AllComplaintsMainComponent {
  SearchText : any ;
 
  page = 1;
  pageSize = 10 ;
  dataarray: AllCOmplaintsMainModel[] = [];
  currentPage: number = 1;
  countries: AllCOmplaintsMainModel[] | undefined;
  collectionSize =100;
  complaintList:AllCOmplaintsMainModel[] = [];
  originalcomplaintList : AllCOmplaintsMainModel[] = [] ;
  users : any;

  
  permissions: any;
  Perstring:any;
  insertticket!:boolean;
  deleteticket!:boolean;
  updateticket!:boolean;
  view!:boolean;
  viewRM!:boolean;
  viewbranch!:boolean;
  viewall!:boolean;
  // router: any;


  constructor(private formBuilder: FormBuilder , private api : ApiService, private router:Router) {
    // this.employeeForm = this.formBuilder.group({
    //   location: ['', Validators.required], // Add validation if needed
    //   maindepartment: ['', Validators.required], // Add validation if needed
    //   department: ['', Validators.required] // Add validation if needed
    // });
}

ngOnInit(){
  this.Perstring = localStorage.getItem('permissions');
  if (this.Perstring) {
    this.permissions = JSON.parse(this.Perstring);
    this.permissions.forEach((permission: number) => {
      if (permission === 1196){this.insertticket = true};
      if (permission === 1197){this.deleteticket = true};
      if (permission === 1198){this.updateticket = true};
      if (permission === 1199){this.view = true};
      if (permission === 1200){this.viewRM = true};
      if (permission === 1201){this.viewbranch = true};
      if (permission === 1202){this.viewall = true};
    });
  } else {
    console.log('No permissions data found.');
  };

  this.api.allCustomerComplaint().subscribe(
    ( data: any) => {

      this.originalcomplaintList=data.data;
      this.complaintList = this.originalcomplaintList ;
      console.log('Response successful!', data.data);
      this.collectionSize = data.data.length;
    },
    (error:any) => {
      console.error('API Error:', error);
    }
  );
}
applyFilter(): void {
  const searchString = this.SearchText.toLowerCase();
  // const filteredData = [...this.complaintList];
  this.complaintList = this.originalcomplaintList.filter((data) =>

  (data.complaintId !== null && !isNaN(data.complaintId) && data.complaintId.toString().includes(searchString)) ||
  (data.ticketId !== null && !isNaN(data.ticketId) && data.ticketId.toString().includes(searchString)) ||
  (data.accountNo !== null && !isNaN(data.accountNo) && data.accountNo.toString().includes(searchString)) ||
    data.subject.toLowerCase().includes(searchString) ||
    (data.date !== null && !isNaN(data.date) && data.date.toString().includes(searchString)) ||
    data.status.toLowerCase().includes(searchString) ||
    // data.insertByUser.toLowerCase().includes(searchString) ||
    data.companyName.toLowerCase().includes(searchString) ||
    data.branch.toLowerCase().includes(searchString)
  );
}
refreshCountries() {
  // this.countries = this.dataarray
  //   .map((country, i) => ({id: i + 1, ...country}))
  //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}

edit(id:any){
  this.router.navigate(['/set/view-customer-complaints-main/'+id]);
}
}
