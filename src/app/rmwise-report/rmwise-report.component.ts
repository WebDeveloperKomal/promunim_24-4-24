import { Component } from '@angular/core';
import { RmWiseModel } from './rmwise-report.component.model';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-rmwise-report',
  templateUrl: './rmwise-report.component.html',
  styleUrls: ['./rmwise-report.component.css']
})
export class RMWiseReportComponent {
  SearchText : any ;
  branchid : number | undefined;
  branchname : any;
  branchcode: any;
  branchcity: any;
  branchaddress : any;
  page = 1;
  pageSize = 10 ;
  RmwiseReport: RmWiseModel[] = [];
  originalRmwiseReport : RmWiseModel[] = [] ;
  currentPage: number = 1;
  // countries: RmWiseModel[] | undefined;
  collectionSize = 0;
  constructor(private formBuilder: FormBuilder,private apiService: ApiService) {
  
}
ngOnInit(){
  this.apiService.allrmwisereport().subscribe(
    (responce:any)=>{
      this.originalRmwiseReport = responce.rmWiseReportData ;
      this.RmwiseReport = this.originalRmwiseReport ;
      console.log('val', responce.rmWiseReportData);
      // console.log('val', responce[0].rmName);
      
      this.collectionSize = responce.rmWiseReportData.length;
    },
    (error:any)=>{
      console.error(error);        
    }
  )
}
applyFilter(): void {
  const searchString = this.SearchText.toLowerCase();
  // const filteredData = [...this.RmwiseReport];
  this.RmwiseReport = this.originalRmwiseReport.filter((data) =>
    // data.portfolioValue.toLowerCase().includes(searchString) ||
    data.rmName.toLowerCase().includes(searchString) ||
    (data.customerCount !== null && !isNaN(data.customerCount) && data.customerCount.toString().includes(searchString)) ||
    (data.portfolioValue[0] !== null && !isNaN(data.portfolioValue[0]) && data.portfolioValue[0].toString().includes(searchString)) ||
    (data.portfolioValue[1] !== null && !isNaN(data.portfolioValue[1]) && data.portfolioValue[1].toString().includes(searchString)) 

  
  );
}
refreshCountries() {
  // this.countries = this.dataarray
  //   .map((country, i) => ({id: i + 1, ...country}))
  //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}

}
