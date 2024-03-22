import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  activeTab: string = 'tab1';
  activeTab1: string = 'tab5';
  activeTab2: string = 'tab9';
  activeTab3: string = 'tab13';
  activeTab4: string = 'tab17';
  shownewsalert : boolean = false ;
  showcustomerinteraction  : boolean = false;
  showleadnotification : boolean = false;
  allCustCounts={
    yearCust: 0,
    portfolio: 0,
    todayCust: 0,
    monthCust: 0,
    allCust: 0,
  };
  allTempCustcounts={
        todayTempCust: 0,
        yearTempCust: 0,
        monthTempCust: 0,
        allTempCust: 0 };
  totalIPRenew={
    todayTotalIp: 0.0,
    allRenewal: 0.0,
    yearTotalIp: 0.0,
    monthTotalIp: 0.0,
    monthRenewal: 0.0,
    yearRenewal: 0.0,
    todayRenewal: 0.0,
    allTotalIp: 0.0
  };
  totalPayInfo={
    todayTotal: 0.0,
    allTotal: 0.0,
    monthTotal: 0.0,
    yearTotal: 0.0
  };
  allVisitLeadCounts={
        monthTotalLead: 0,
        allTotalLead: 0,
        yearTotalLead: 0,
        todayTotalVisit: 0,
        todayTotalLead: 0,
        monthTotalVisit: 0,
        yearTotalVisit: 0,
        allTotalVisit: 0,
  };
  followUp:any;
  LeadNotifications={
    todayNotif:'',
    monthNotif:''
  }

  constructor(private apiService:ApiService){}
  
  newsalert(){
    this.shownewsalert = !this.shownewsalert ;
  }
  customerIntraction(){
    this.showcustomerinteraction = !this.showcustomerinteraction
  }
  leadnotification(){
    this.showleadnotification = !this.showleadnotification
  }

changeTab(tabId: string) {
  this.activeTab = tabId;
  
}

changeTab1(tabId: string) {
  this.activeTab1 = tabId;
}

changeTab2(tabId: string) {
  this.activeTab2 = tabId;
}

changeTab3(tabId: string) {
  this.activeTab3 = tabId;
}


changeTab4(tabId: string) {
  this.activeTab4 = tabId;
}

switchTabBasedOnId(id: string) {
  if (id === '') {
    this.activeTab = 'tab1';
    this.activeTab1 = 'tab5';
    this.activeTab2 = 'tab9';
    this.activeTab3 = 'tab13';
  } else if (id === 'tab2') {
    this.activeTab = 'tab2';
  }else if (id === 'tab3') {
    this.activeTab = 'tab3';
  }
}

ngOnInit(){
  this.apiService.AllTempCustomerCount().subscribe(
    (res:any)=>{this.allTempCustcounts=res.allTempCust;},
    (err:any)=>{console.error(err);}
  );

  this.apiService.allVisitLeadCount().subscribe(
    (res:any)=>{this.allVisitLeadCounts=res.allVisitLeadCount;},
    (err:any)=>{console.error(err);}
  );

  this.apiService.allCustCount().subscribe(
    (res:any)=>{
      this.allCustCounts.allCust=res.allCust;
      this.allCustCounts.todayCust=res.todayCust;
      this.allCustCounts.monthCust=res.monthCust;
      this.allCustCounts.yearCust=res.yearCust;
      this.allCustCounts.portfolio=res.portfolio;
    },
    (err:any)=>{console.error(err);}
  );

  this.apiService.allPaymentInfo().subscribe(
    (res:any)=>{
      this.totalIPRenew=res.tootalIPRenew;
      this.totalPayInfo=res.tootalPayInfo;
    },
    (err:any)=>{console.error(err);}
  );

  // this.apiService.allNewsAlert().subscribe(
  //   (res:any)=>{
  //     this.totalIPRenew=res.tootalIPRenew;
  //     this.totalPayInfo=res.tootalPayInfo;
  //   },
  //   (err:any)=>{console.error(err);}
  // );

  // this.allLatestInteractions();
 
}

  allLatestInteractions(){
  this.apiService.allLatestFollowUp().subscribe(
      (res:any)=>{
        this.followUp=res.data;
      },
      (err:any)=>{console.error(err);}
    );
  }

leadNotifications(){
  this.apiService.leadNotification().subscribe(
     (res:any)=>{
       this.LeadNotifications.todayNotif=res.todayNotif;
       this.LeadNotifications.monthNotif=res.monthNotif;
     },
     (err:any)=>{console.error(err);}
   );
 }

// refresh(){
//   window.location.reload();
// }





}
