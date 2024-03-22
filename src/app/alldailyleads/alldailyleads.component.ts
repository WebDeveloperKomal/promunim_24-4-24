import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllDailyLeadsModel } from './alldailyleads.component.model';
import { BranchModel } from '../branch/branch.component.model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alldailyleads',
  templateUrl: './alldailyleads.component.html',
  styleUrls: ['./alldailyleads.component.css']
})
export class AlldailyleadsComponent {
  SearchText : any ;
  page = 1;
  pageSize = 10 ;
  dataarray: AllDailyLeadsModel[] = [];
  currentPage: number = 1;
  countries: AllDailyLeadsModel[] | undefined;
  collectionSize =100;
  leadsList:AllDailyLeadsModel[] = [];
  OriginalLeadsList: AllDailyLeadsModel[] = [] ;
  dailyleadform !: FormGroup;
  branches:BranchModel[]=[];

  permissions: any;
  Perstring:any;
  insertlead!:boolean;
  deletelead!:boolean;
  updatelead!:boolean;
  view!:boolean;
  viewRM!:boolean;
  viewbranch!:boolean;
  viewall!:boolean;  

  constructor( private service: ApiService , private router:Router,private formBuilder: FormBuilder) {
    this.dailyleadform = this.formBuilder.group({
      branch: ['', Validators.required],      
    });
  }

ngOnInit(){
  this.Perstring = localStorage.getItem('permissions');
  if (this.Perstring) {
    this.permissions = JSON.parse(this.Perstring);
    this.permissions.forEach((permission: number) => {
      if (permission === 1014){this.insertlead = true};
      if (permission === 1015){this.deletelead = true};
      if (permission === 1016){this.updatelead = true};
      if (permission === 1017){this.view = true};
      if (permission === 1018){this.viewRM = true};
      if (permission === 1019){this.viewbranch = true};
      if (permission === 1020){this.viewall = true};
    });
  } else {
    console.log('No permissions data found.');
  };


  this.service.alldailyLead().subscribe(
    ( data: any) => {
      this.OriginalLeadsList=data.data;
      this.leadsList = this.OriginalLeadsList ;
      console.log('Response successful!', data.data);
      this.collectionSize = data.data.length;
    },
    (error:any) => {
      console.error('API Error:', error);
    }
  );

  
  this.service.allBranches().subscribe(
    (responce:any)=>{
      this.branches=responce.data;
    },
    (error:any)=>{
      console.error(error);        
    }
  )
}

edit(id:any){
  this.router.navigate(['/set/view-add-dailyLeads/'+id]);
}


applyFilter(): void {
  const searchString = this.SearchText.toLowerCase();
  const filteredData = [...this.leadsList];
  this.leadsList = this.OriginalLeadsList.filter((data) =>
    data.company_name.toLowerCase().includes(searchString) ||
    data.cust_name.toLowerCase().includes(searchString) ||
    data.branch.toLowerCase().includes(searchString) ||
    data.attendedByLN.toLowerCase().includes(searchString) ||
    (data.contact_no !== null && !isNaN(data.contact_no) && data.contact_no.toString().includes(searchString)) ||
    (data.customer_id !== null && !isNaN(data.customer_id) && data.customer_id.toString().includes(searchString)) 

  );
}
refreshCountries() {
  // this.countries = this.dataarray
  //   .map((country, i) => ({id: i + 1, ...country}))
  //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}

onSubmit(){
  console.log("DATA :::::: " ,this.dailyleadform.value);
  
  this.service.Searchleaddetails(this.dailyleadform.value).subscribe(
    (responce:any)=>{
      this.OriginalLeadsList=responce.data;
      this.leadsList = this.OriginalLeadsList ;

      console.log('val',responce.data);
    },
    (error:any)=>{
      console.error(error);        
    }
  )
}
}
