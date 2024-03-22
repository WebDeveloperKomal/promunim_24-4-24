import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { allComplaintModel } from './all-complaints.component.model';
import { AllInteractionModel } from '../all-interactions/all-interactions.component.model';
import { BranchModel } from '../branch/branch.component.model';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-complaints',
  templateUrl: './all-complaints.component.html',
  styleUrls: ['./all-complaints.component.css']
})
export class AllComplaintsComponent {
  SearchText : any ;
  branchid : number | undefined;
  branchname : any;
  branchcode: any;
  branchcity: any;
  branchaddress : any;
  page = 1;
  pageSize = 10 ;
  AllComplaintsList: AllInteractionModel[] = [];
  originalAllComplaintsList : AllInteractionModel[] = [] ;
  currentPage: number = 1;
  collectionSize =0;
  InteractionForm !: FormGroup;
  branches:BranchModel[]=[];

  permissions: any;
  Perstring:any;
  insertticket!:boolean;
  deleteticket!:boolean;
  updateticket!:boolean;
  view!:boolean;
  viewRM!:boolean;
  viewbranch!:boolean;
  viewall!:boolean;
  showtable : boolean = false ;
  constructor(private formBuilder: FormBuilder,private apiService:ApiService,private route:ActivatedRoute) {
    this.InteractionForm = this.formBuilder.group({
      branch: ['', Validators.required], // Add validation if needed
      fromDate: ['', Validators.required], // Add validation if needed
      toDate: ['', Validators.required] // Add validation if needed
     
    });
}


ngOnInit(){
  this.Perstring = localStorage.getItem('permissions');
  if (this.Perstring) {
    this.permissions = JSON.parse(this.Perstring);
    this.permissions.forEach((permission: number) => {
      if (permission === 1056){this.insertticket = true};
      if (permission === 1057){this.deleteticket = true};
      if (permission === 1058){this.updateticket = true};
      if (permission === 1059){this.view = true};
      if (permission === 1060){this.viewRM = true};
      if (permission === 1061){this.viewbranch = true};
      if (permission === 1062){this.viewall = true};
    });
  } else {
    console.log('No permissions data found.');
  };


  this.apiService.allBranches().subscribe(
    (responce:any)=>{
      this.branches=responce.data;
    },
    (error:any)=>{
      console.error(error);        
    }
  )
}

onSubmit(){
  console.log("DATA :::::: " ,this.InteractionForm.value);
  this.showtable =! this.showtable;
  this.apiService.allComplaintsReport(this.InteractionForm.value).subscribe(
    (responce:any)=>{
      this.originalAllComplaintsList=responce.data;
      this.AllComplaintsList = this.originalAllComplaintsList ;
      console.log('val',responce.data);
      this.collectionSize = responce.data.length ;
    },
    (error:any)=>{
      console.error(error);        
    }
  )
}

applyFilter(): void {
  const searchString = this.SearchText.toLowerCase();
  // const filteredData = [...this.AllComplaintsList];
  this.AllComplaintsList = this.originalAllComplaintsList.filter((data) =>
    data.empName.toLowerCase().includes(searchString) ||
    data.followupByWhom.toLowerCase().includes(searchString) ||
    data.custName.toLowerCase().includes(searchString) ||
  data.status.toLowerCase().includes(searchString) ||
  data.desc.toLowerCase().includes(searchString) ||
    (data.date !== null && !isNaN(data.date) && data.date.toString().includes(searchString)) ||
    (data.accountNo !== null && !isNaN(data.accountNo) && data.accountNo.toString().includes(searchString)) ||
    (data.nextDate !== null && !isNaN(data.nextDate) && data.nextDate.toString().includes(searchString))
    

  

  );

 
}
refreshCountries() {
  // this.countries = this.dataarray
  //   .map((country, i) => ({id: i + 1, ...country}))
  //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}

}
