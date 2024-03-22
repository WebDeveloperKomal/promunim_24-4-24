import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewAddDailyvisitModel } from './view-add-dailyvisit.component.model';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { AllDailyVisitModel } from '../all-daily-visit/all-daily-visit.component.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-add-dailyvisit',
  templateUrl: './view-add-dailyvisit.component.html',
  styleUrls: ['./view-add-dailyvisit.component.css']
})
export class ViewAddDailyvisitComponent {
 

viewAddDailyvisitForm  !: FormGroup;
SearchText: any;

page = 1;
pageSize = 10;
dataarray: ViewAddDailyvisitModel[] = [];
currentPage: number = 1;
countries: ViewAddDailyvisitModel[] | undefined;
collectionSize = 100;

id!:number;

dvStatusList: ViewAddDailyvisitModel[] = [];
custList:AllDailyVisitModel = new AllDailyVisitModel();

lead={
  nextVisitDate:'',
  visitDate:'',
  customerId:0,
  isnxt:false,
  description:'',
  status:''
}

activeTab: string = 'tab1';
shownextdate: boolean = false;
constructor(private formBuilder: FormBuilder, private apiservice: ApiService, private route: ActivatedRoute) {
  this.viewAddDailyvisitForm = this.formBuilder.group({
    visitDate: ['' , Validators.required],
    nextVisitDate: ['' , Validators.required],
    status: ['', Validators.required], // Add validation if needed
    description: ['', Validators.required], // Add validation if needed
    isnxt: ['', Validators.required],
  });
}

ngOnInit() {
  this.id = this.route.snapshot.params['id'];
  this.apiservice.allvisitsOfCust(this.id).subscribe(
    (response: any) => {
      this.dvStatusList = response.data;
      
    },
    (error: any) => { console.error(error); }
  )
}


onSubmit1(){
  this.lead.customerId = this.id;
  console.log("DATA READY TO SEND ::: ", this.lead);
  this.apiservice.addVisitdetails(this.lead).subscribe(
    (response:any)=>{
      console.log(response.status);
      Swal.fire({
        title: "Record Added!",
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


applyFilter(): void {
  // const searchString = this.SearchText.toLowerCase();
  // const filteredData = [...this.dataarray];
  // this.dataarray = filteredData.filter((data) =>
  //   data.branchname.toLowerCase().includes(searchString) ||
  //   data.branchcode.toLowerCase().includes(searchString) ||
  //   data.branchcity.toLowerCase().includes(searchString) ||
  //   data.branchaddress.toLowerCase().includes(searchString)
  // );
}
refreshCountries() {
  this.countries = this.dataarray
    .map((country, i) => ({ id: i + 1, ...country }))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}


changeTab(tabId: string) {
  this.activeTab = tabId;
}

switchTabBasedOnId(id: string) {
  if (id === 'tab1') {
    this.activeTab = 'tab1';
  } else if (id === 'tab2') {
    this.activeTab = 'tab2';
  }
}

checkednextdate() {
  this.shownextdate = !this.shownextdate
}


}
