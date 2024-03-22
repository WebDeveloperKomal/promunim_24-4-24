import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewAddDailyLeadsModel } from './view-add-dailyleads.component.model';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-add-dailyleads',
  templateUrl: './view-add-dailyleads.component.html',
  styleUrls: ['./view-add-dailyleads.component.css']
})
export class ViewAddDailyleadsComponent {
  viewadddailyleads !: FormGroup;
  SearchText: any;

  page = 1;
  pageSize = 10;
  dataarray: ViewAddDailyLeadsModel[] = [];
  currentPage: number = 1;
  countries: ViewAddDailyLeadsModel[] | undefined;
  collectionSize = 100;
  id!: number;
  activeTab: string = 'tab1';
  dlStatusList: ViewAddDailyLeadsModel[] = [];

  lead={
    nextVisitDate:'',
    visitDate:'',
    tmpCustId:0,
    isnxt:false,
    description:''
  }


  constructor(private formBuilder: FormBuilder, private apiservice: ApiService, private route: ActivatedRoute) {
    this.viewadddailyleads = this.formBuilder.group({
      description: ['', Validators.required],
      visitDate: ['' , Validators.required],
      nextVisitDate: ['' , Validators.required],
      isnxt: ['' , Validators.required]
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.lead.tmpCustId = this.id;
    this.apiservice.allleads(this.id).subscribe(
      (response: any) => {
        this.dlStatusList = response.data;
      },
      (error: any) => { console.error(error); }
    )
  }

  onSubmit() {
    console.log("DATA READY TO SEND ::: ", this.lead);
    this.apiservice.addleadsdetails(this.lead).subscribe(
      (response: any) => { 
        console.log(response.status);
        Swal.fire({
          title: "Record added!",
          icon: "success"
        });
       },
      (error: any) => {
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
    // this.countries = this.dataarray
    //   .map((country, i) => ({id: i + 1, ...country}))
    //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
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
}
