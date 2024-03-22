import { Component } from '@angular/core';
import { AllInvoicesModel } from './all-invoices.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchModel } from '../branch/branch.component.model';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-invoices',
  templateUrl: './all-invoices.component.html',
  styleUrls: ['./all-invoices.component.css']
})
export class AllInvoicesComponent {
  SearchText : any ;
  branchid : number | undefined;
  branchname : any;
  branchcode: any;
  branchcity: any;
  branchaddress : any;
  page = 1;
  pageSize = 10 ;
  dataarray: AllInvoicesModel[] = [];
  currentPage: number = 1;
  AllInvicesList: AllInvoicesModel[] =[];
  originalAllInvicesList : AllInvoicesModel[] = [] ;
  collectionSize =0;
  invoiceSearch !: FormGroup;
  accountno !: number;
  branches:BranchModel[]=[];
  showtable : boolean = false ;

  constructor(private formBuilder: FormBuilder, private apiService:ApiService,private route:ActivatedRoute) {
    this.invoiceSearch = this.formBuilder.group({
      branch: ['', Validators.required], // Add validation if needed
      fromDate: ['', Validators.required], // Add validation if needed
      toDate: ['', Validators.required] ,
      status: ['', Validators.required]// Add validation if needed
     
    });
}


  // CompanyName : any;
  // total : any;
  // totalPaidAmt : any;
  // balance : any;
  // invoicePaiddate : any;
  // totalUnPaidAmt : any;
  // totalInvoiceAmt : any;
  // invoiceId : any;
  // invoiceDate : any;
  // branch : any;
  // invoiceDueDate : any;
  // status : any;

refreshCountries() {
  // this.countries = this.dataarray
  //   .map((country, i) => ({id: i + 1, ...country}))
  //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
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
  console.log("DATA :::::: " ,this.invoiceSearch.value);
  this.showtable =! this.showtable;
  this.apiService.allInvoiceReport(this.invoiceSearch.value).subscribe(
    (responce:any)=>{
      this.originalAllInvicesList=responce.data;
      this.AllInvicesList =this.originalAllInvicesList ;
      this.collectionSize = responce.data.length ;
      console.log('val',responce.data);
    },
    (error:any)=>{
      console.error(error);        
    }
  )
}



applyFilter(): void {
 
  const searchString = this.SearchText.toLowerCase();
  this.AllInvicesList = this.originalAllInvicesList.filter((data) =>
    data.CompanyName.toLowerCase().includes(searchString) ||
    data.branch.toLowerCase().includes(searchString) ||
    data.status.toLowerCase().includes(searchString)||
    (data.total !== null && !isNaN(data.total) && data.total.toString().includes(searchString))||
    (data.totalPaidAmt !== null && !isNaN(data.totalPaidAmt) && data.totalPaidAmt.toString().includes(searchString))||
    (data.balance !== null && !isNaN(data.balance) && data.balance.toString().includes(searchString))||

    (data.invoicePaiddate !== null && !isNaN(data.invoicePaiddate) && data.invoicePaiddate.toString().includes(searchString)) ||
    (data.totalUnPaidAmt !== null && !isNaN(data.totalUnPaidAmt) && data.totalUnPaidAmt.toString().includes(searchString))||
    (data.totalInvoiceAmt !== null && !isNaN(data.totalInvoiceAmt) && data.totalInvoiceAmt.toString().includes(searchString))||
    (data.invoiceId !== null && !isNaN(data.invoiceId) && data.invoiceId.toString().includes(searchString))||
    (data.invoiceDate !== null && !isNaN(data.invoiceDate) && data.invoiceDate.toString().includes(searchString))||
    (data.invoiceDueDate !== null && !isNaN(data.invoiceDueDate) && data.invoiceDueDate.toString().includes(searchString))
  
    );
}



}
