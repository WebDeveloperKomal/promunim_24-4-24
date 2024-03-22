import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllInteractionModel } from './all-interactions.component.model';
import { BranchModel } from '../branch/branch.component.model';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-interactions',
  templateUrl: './all-interactions.component.html',
  styleUrls: ['./all-interactions.component.css']
})
export class AllInteractionsComponent {
  
  SearchText : any ;
  branchid : number | undefined;
  branchname : any;
  branchcode: any;
  branchcity: any;
  branchaddress : any;
  page = 1;
  pageSize = 10 ;
  AllInteractionList: AllInteractionModel[] = [];
  originalInteractionList : AllInteractionModel[] = [] ;
  currentPage: number = 1;
  // countries: AllTransactionModel[] | undefined;
  collectionSize =0;
  InteractionForm !: FormGroup;
  branches:BranchModel[]=[];
  showtable : boolean = false ;
  constructor(private formBuilder: FormBuilder,private apiService:ApiService,private route:ActivatedRoute) {
    this.InteractionForm = this.formBuilder.group({
      branch: ['', Validators.required], // Add validation if needed
      fromDate: ['', Validators.required], // Add validation if needed
      toDate: ['', Validators.required] // Add validation if needed
     
    });
}


ngOnInit(){
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
  this.apiService.allInteractionReport(this.InteractionForm.value).subscribe(
    (responce:any)=>{
      this.originalInteractionList=responce.data;
      this.AllInteractionList = this.originalInteractionList
      console.log('val',responce.data);
      this.collectionSize = responce.data.length
    },
    (error:any)=>{
      console.error(error);        
    }
  )
}

applyFilter(): void {
  const searchString = this.SearchText.toLowerCase();
  // const filteredData = [...this.AllInteractionList];
  this.AllInteractionList = this.originalInteractionList.filter((data) =>
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
