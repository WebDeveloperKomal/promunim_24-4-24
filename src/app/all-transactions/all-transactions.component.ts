import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllTransactionModel } from './all-transactions.component.model';
import { BranchModel } from '../branch/branch.component.model';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.css']
})
export class AllTransactionsComponent {
 
  SearchText : any ;
  branchid : number | undefined;
  branchname : any;
  branchcode: any;
  branchcity: any;
  branchaddress : any;
  page = 1;
  pageSize = 10 ;
  AllTransactionList: AllTransactionModel[] = [];
  originalAllTransactionList : AllTransactionModel[] = [] ;
  currentPage: number = 1;
  countries: AllTransactionModel[] | undefined;
  collectionSize =0;
  transactionForm !: FormGroup;
  branches:BranchModel[]=[];
  showtable : boolean = false ;
  constructor(private formBuilder: FormBuilder,private apiService:ApiService,private route:ActivatedRoute) {
    this.transactionForm = this.formBuilder.group({
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
  console.log("DATA :::::: " ,this.transactionForm.value);
  this.showtable =! this.showtable;
  this.apiService.allTransactionReport(this.transactionForm.value).subscribe(
    (responce:any)=>{
      this.originalAllTransactionList=responce.data;
      this.AllTransactionList = this.originalAllTransactionList ;
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
  // const filteredData = [...this.AllTransactionList];
  this.AllTransactionList = this.originalAllTransactionList.filter((data) =>
    data.CompanyName.toLowerCase().includes(searchString) ||
    // data.amount.toLowerCase().includes(searchString) ||
    data.paymentMode.toLowerCase().includes(searchString) ||
    data.description.toLowerCase().includes(searchString) ||
    (data.transactionId !== null && !isNaN(data.transactionId) && data.transactionId.toString().includes(searchString)) ||
    (data.invoiceId !== null && !isNaN(data.invoiceId) && data.invoiceId.toString().includes(searchString)) ||
    (data.transactionDate !== null && !isNaN(data.transactionDate) && data.transactionDate.toString().includes(searchString))|| 
    (data.amount !== null && !isNaN(data.amount) && data.amount.toString().includes(searchString)) 

  

  );
}
refreshCountries() {
  // this.countries = this.dataarray
  //   .map((country, i) => ({id: i + 1, ...country}))
  //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}
}
