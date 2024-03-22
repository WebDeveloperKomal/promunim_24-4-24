import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewCustomerdetailModel } from './view-customer-details-new.model';
import { VoucherModel } from './voucherModel';
import { CustInteractionModel } from './customerinteractionModel';
import { TaxPlanningModel } from './taxplanningModel';
import Swal from 'sweetalert2';
import { ProductModel } from './productModel';
import { accountModel } from './acccountModel';
import { complianceModel } from './complianceModel';
import { billingModel } from './billingModel';
import { ProfileModel } from './profileModel';
import { acWriting } from './accountwrittingModel';
import { kycModel } from './kycModel';
import { CustomerDocs } from './customerdocsModel';
import { bankStatementListModel } from './bankstatementlistModel';
import { AuthorisedSignatoryModel } from './authorisedsigntoryModel';
import { transactionModel } from './transactionModel';
import { AofTwomodel } from '../accountopening-form/aofmodel2';
import { ViewCustomerdetailModelNew } from '../view-customer-details/viewnew.model';
import { ViewCustomerdetailNewModel } from '../view-customer-details/view-customer-details.component.model';

@Component({
  selector: 'app-view-customer-details-new',
  templateUrl: './view-customer-details-new.component.html',
  styleUrls: ['./view-customer-details-new.component.css']
})
export class ViewCustomerDetailsNewComponent {


  step1 !: FormGroup;
  step2 !: FormGroup;
 employeeForm !: FormGroup;
 employeeForm1 !:FormGroup;
 addcustInteractionForm !: FormGroup ;
 UpdatecustInteractionForm !: FormGroup ;
 addTaxPlanning !: FormGroup ;
 UpdateTaxPlanning !: FormGroup ;
 addAccountWritting !: FormGroup ;
 addvoucher !: FormGroup ;
 addform !: FormGroup;
 SearchText : any ;
 branchid : number | undefined;
 branchname : any;
 branchcode: any;
 branchcity: any;
 branchaddress : any;
 page = 1;
 pageSize = 10 ;

 currentPage: number = 1;
 // countries: ViewCustomerdetailModel[] | undefined;
 collectionSize =100;
 activeTab: string = 'tab1';
 activeTab1: string = 'tabstate';


 ReadMore:boolean = true;
visible:boolean = true;
visible1:boolean = true;
visible2:boolean = true;
visible3:boolean = true;
visible4:boolean = true;
visible5:boolean = true;
visible6:boolean = true;
visible7:boolean = true;
visible8:boolean = true;
visible9:boolean = true;
visible10:boolean = true;
visible11:boolean = true;
visible15:boolean = true;
visible16 : boolean = false;
showdata: boolean = true;
 showdata1 : boolean = false;
 showdata2: boolean = true;
 showdata3 : boolean = false;
 showdata4 : boolean = false;
 showdata5 : boolean = false;
 showdatacust: boolean = true;
 showdatacust1 : boolean = false;
 showdatacust2 : boolean = false;
 showadd : boolean = true;
 showupdate : boolean = false ;
customeraccountdetails:  ViewCustomerdetailModel = new ViewCustomerdetailModel;
customerinteractiondetails : CustInteractionModel [] = [];
customerinteractiondetailsobj : CustInteractionModel = new CustInteractionModel() ;
voucherdetails : VoucherModel [] = [] ;


// ProfileList: ProfileModel = new ProfileModel();
 id: any;
 followupId : any;
 accountNo : any ;
 showkyc : boolean = false;
 selectedOption: string = '';
 taxplanningdetails : TaxPlanningModel[] = [] ;
 doc !: File ;

//  customeraccountdetails: ViewCustomerdetailModel[] = [];
 getcompanyusedetails: ViewCustomerdetailModel[] = [];
 Newdata: ViewCustomerdetailModelNew = new ViewCustomerdetailModelNew();
 Newdata1: ViewCustomerdetailNewModel = new ViewCustomerdetailNewModel();
 signitury: ViewCustomerdetailNewModel[] = [];
 productList: ProductModel = new ProductModel();
 accountList: accountModel = new accountModel();
 compliancesList: complianceModel = new complianceModel();
 BillingList: billingModel = new billingModel();

 ProfileList: ProfileModel = new ProfileModel();
 acWritingList: acWriting[] = [];

 kycList: kycModel [] =[];
 bankStatementList: bankStatementListModel[] = [];
 getDocList: CustomerDocs = new CustomerDocs();


 SignatoryList: AuthorisedSignatoryModel[] = [];

 transactionList: transactionModel[] = [];
//  voucherdetails: VoucherModel[] = [];

 AOF2: AofTwomodel = new AofTwomodel();

//  id!: number;
 tidData = {
   tid: 0
 }
 accdata = {
   accountNo: 0
 }

 URL: any;
 photo!: File;
 sign!: File;



 constructor(private formBuilder: FormBuilder , private apiService:ApiService,private route:ActivatedRoute, private router:Router) {

   

  this.step1 = this.formBuilder.group({
    tid: ['', Validators.required],
    branchId: ['', Validators.required],
    aofNo: ['', Validators.required],
    tempCustUIN: ['', Validators.required],
    tempCustApplicantName: ['', Validators.required],
    tempCustdorordob: ['', Validators.required],
    organization_individual_details_id: ['', Validators.required],
    tempCustPanNumber: ['', Validators.required],
    adharno: ['', Validators.required],
    tempCustRegAddress: ['', Validators.required],
    tempCustCity: ['', Validators.required],
    tempCustRegMobile: ['', Validators.required],
    tempCustRegPIN: ['', Validators.required],
    tempCustRegTelephone: ['', Validators.required],
    tempCustRegMailID: ['', Validators.required],
    tempCustMailingAddress: ['', Validators.required],
    tempCustMailingAddressCity: ['', Validators.required],
    tempCustMailingAddressPin: ['', Validators.required],
    tempCustMailingAddressMobileNo: ['', Validators.required],
    tempCustMailingAddressTelephone: ['', Validators.required],
    mailingaddress: ['', Validators.required],
    city1: ['', Validators.required],
    pin1: ['', Validators.required],
    mobileno1: ['', Validators.required],
    telephoneno1: ['', Validators.required],
  });

   this.addform = this.formBuilder.group({
    //  organizationname: ['', Validators.required], 
    //  dateofincorp: ['', Validators.required], 
    //  pan: ['', Validators.required],
    //  adhar :  ['', Validators.required]

    tids: localStorage.getItem('tidprofile'),
    applicantName: ['', Validators.required],
    incorporationRegistrationDob: ['', Validators.required],
    pan_No: ['', Validators.required],
    aadhaarNo: ['', Validators.required],
    tanNo: ['', Validators.required],
    ptNo: ['', Validators.required],
    gstNo: ['', Validators.required],
    uin: ['', Validators.required],
    tascNo: ['', Validators.required],
    emailId: ['', Validators.required],
    address: ['', Validators.required],
    maAddress: ['', Validators.required],

    city: ['', Validators.required],
    m_city: ['', Validators.required],
    pin: ['', Validators.required],
    m_pin: ['', Validators.required],
    telephoneNo: ['', Validators.required],
    m_telephoneNo: ['', Validators.required],
    mobileNumber: ['', Validators.required],
    m_mobileNumber: ['', Validators.required],
    whatsAppNo: ['', Validators.required],
   });

   this.employeeForm1 = this.formBuilder.group({
     productName: ['', Validators.required], 
     assignDate: ['', Validators.required], 
     expiryDate: ['', Validators.required],
     dueDate :  ['', Validators.required]
   });
this.addcustInteractionForm = this.formBuilder.group({
 accountNo : ['', Validators.required],
 branchId : ['', Validators.required],
 status :['', Validators.required],
 followupType :['', Validators.required],
 followupByWhom:['', Validators.required],
 date: ['', Validators.required],
 discription : ['', Validators.required],
 nextDate : ['', Validators.required],
 isVisited : false

})

this.UpdatecustInteractionForm = this.formBuilder.group({
 accountNo : ['', Validators.required],
 branchId : ['', Validators.required],
 status :['', Validators.required],
 followupType :['', Validators.required],
 followupByWhom:['', Validators.required],
 date: ['', Validators.required],
 discription : ['', Validators.required],
 nextDate : ['', Validators.required],
 isVisited : false ,
 // followupId : ['', Validators.required]
 followupId : localStorage.getItem("followupId")

})

this.addvoucher = this.formBuilder.group({
 voucherDate : ['', Validators.required],
 paidDate : ['', Validators.required],
 amount :['', Validators.required],
 paymentMode :['', Validators.required],
 description:['', Validators.required],


})

this.addTaxPlanning= this.formBuilder.group({
 // accountNo : localStorage.getItem("acccountNo") ,
 accountNo : this.route.snapshot.params['accountNo'],
 taxName : ['', Validators.required],
 fromDate : ['', Validators.required],
 toDate :['', Validators.required],
 paidDate :['', Validators.required],
 paidAmount:['', Validators.required],
 description:['', Validators.required],


})

this.UpdateTaxPlanning = this.formBuilder.group({
 // accountNo : localStorage.getItem("acccountNo") ,
 accountNo : this.route.snapshot.params['accountNo'],
 taxName : ['', Validators.required],
 fromDate : ['', Validators.required],
 toDate :['', Validators.required],
 paidDate :['', Validators.required],
 taxPlanningId:['', Validators.required],
 description:['', Validators.required],


})
this.addAccountWritting = this.formBuilder.group({
 // accountNo : localStorage.getItem("acccountNo") ,
 accountNo : this.route.snapshot.params['accountNo'],
 fromDate : ['', Validators.required],
 toDate :['', Validators.required],
 document : ['', Validators.required],
 description:['', Validators.required],


})

}

ngOnInit(){ 
 this.id = this.route.snapshot.params['id'];

 // this.getVoucher(this.accountNo)

//  console.log(this.id);
 this.apiService.getAccount(this.id).subscribe(
   (response: any) => {
     this.accountList = response.data;
     // console.log("account", response.data);

     localStorage.setItem('accountNo', this.accountList.accountNo);
     

     this.apiService.acWriting(this.accountList.accountNo).subscribe(
       (response: any) => {
         this.acWritingList = response.data;
         // console.log("accWriting", response.data);
       },
       (error: any) => { console.error(error); }
     )

     this.apiService.getBankStatement(this.accountList.accountNo).subscribe(
       (response: any) => {
         this.bankStatementList = response.data;
         // console.log("bankStatementList,,,,,,, ", response.data);
       },
       (error: any) => { console.error(error); }
     )

     // getTransaction
     this.apiService.getTransaction(this.accountList.accountNo).subscribe(
       (response: any) => {
         this.transactionList = response.data;
         // console.log("transaction,,,,", response.data);
       },
       (error: any) => {
         console.error(error);
       }
     )

     this.apiService.getVoucher(this.accountList.accountNo).subscribe(
       (res: any) => {
         this.voucherdetails = res.data;
         // localStorage.setItem("followupId", this.customerinteractiondetailsobj.followupId);
         console.log("getvoucher", res.data);
         // this.getproddetails = res.data ;

       },
       (error: any) => {
         console.error(error);
       }
     )

     // console.log('********** Doc List **************', this.accountList.accountNo);
     this.accdata.accountNo = this.accountList.accountNo;
     this.apiService.getDoc2(this.accdata).subscribe(
       (response: any) => {
         //  console.log("Doc List,,,,,,,,,,,,,,", response);
         this.getDocList = response;
         // console.log("bulkDocument,,,,,,,,,,,,,,", this.getDocList.payInSlips);
       },
       (error: any) => { console.error('Check Book ERROR :::: ', error); }
     )
   },
   (error: any) => { console.error(error); }
 )


 console.log(this.id);
 this.apiService.getSignatory(this.id).subscribe(
   (response: any) => {
     this.signitury = response.data;
   },
   (error: any) => { console.error(error); }
 )


 console.log(this.id);
 this.apiService.getCompliances(this.id).subscribe(
   (response: any) => {
     this.compliancesList = response.data;
     // console.log("compliance", response.data);
   },
   (error: any) => { console.error(error); }
 )

 console.log("dataaaaa*************", this.Newdata.email);
 this.apiService.getCustomerInfo(this.id).subscribe(
   (response: any) => {
     this.Newdata = response.data;
    //  console.log("dataaaaa*************", response.data);
   },
   (error: any) => { console.error(error); }
 )


 console.log(this.id);
 this.apiService.getcompliance2(this.id).subscribe(
   (response: any) => {
     this.productList = response.custPro;
     // console.log("getcompliance2", response.custPro);
     // console.log("getcomplianceproductname", response.custPro.productName);
   },
   (error: any) => { console.error(error); }
 )


 console.log(this.id);
 this.apiService.getCompanyUse(this.id).subscribe(
   (response: any) => {
     this.Newdata1 = response.data;
     // console.log("companyuse", response.data);
   },
   (error: any) => { console.error(error); }
 )

 console.log(this.id);
 this.apiService.getBilling(this.id).subscribe(
   (response: any) => {
     this.BillingList = response;
     // console.log("billing", response);
   },
   (error: any) => { console.error(error); }
 )


 this.tidData.tid = this.id;
 console.log('************** kyc details *******************', this.tidData);
 this.apiService.getKYCDocuments(this.tidData).subscribe(
   (response: any) => {
     this.kycList = response.document;
     console.log("kyc,,,,,,,,,,,,,,,,", response);
     // window.location.reload();
   },
   (error: any) => { console.error("kyc error,,,,,,,,,,,,,,,,", error); }
 )

 console.log(this.id);
 this.apiService.getProfile(this.id).subscribe(
   (response: any) => {
     this.ProfileList = response.data;
     console.log("ProfileList***************", response.data);
     localStorage.setItem('tidprofile', response.data.tid)
   },
   (error: any) => { console.error(error); }
 )

 //getAuthorisedSignatory

 console.log(this.id);
 this.apiService.getAuthorisedSignatory(this.id).subscribe(
   (response: any) => {
     this.SignatoryList = response.data;
     // console.log("getAuthorisedSignatory,,,,,,,,", response.data);
   },
   (error: any) => { console.error(error); }
 )


 // console.log(this.id);
 // this.apiservice.acWriting(this.id).subscribe(
 //   (response: any) => {
 //     this.acWritingList = response.data;
 //     console.log("ProfileList", response.data);

 //   },
 //   (error: any) => { console.error(error); }
 // )


 // console.log(this.id);
//  this.apiService.getProfile(this.id).subscribe(
//    (response: any) => {
//      this.ProfileList = response.data;
//      console.log("ProfileList", response.data);

//    },
//    (error: any) => { console.error(error); }
//  )
//  this.getproductdetails(8888888888);
//  this.getCUstInteractiondetails(8888888888);
this.getproductdetails(this.accountNo);
 this.getCUstInteractiondetails(this.accountNo);
//  this.getVoucher(this.accountNo);
 this.getTaxPlanning
}

applyFilter(): void {
 const searchString = this.SearchText.toLowerCase();
 // const filteredData = [...this. customeraccountdetails];
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
changeTab1(tabId: string) {
 this.activeTab1 = tabId;
}

switchTabBasedOnId(id: string) {
 if (id === 'tab1') {
   this.activeTab = 'tab1';
 } else if (id === 'tab2') {
   this.activeTab = 'tab2';
 }else if (id === 'tab3') {
   this.activeTab = 'tab3';
 }
}
delete(){
 confirm("Are you sure to delete this record")
}
AddInvoice(){
 // confirm("Please Select Customer")
 this.showdata2 = !this.showdata2;
 this.showdata3 = !this.showdata3
}
AddInvoice1(){
 this.showdata2 = true  ;
 this.showdata3 = false;
}
AddInvoice2(){
 // confirm("Please Select Customer")
 this.showdata4 = !this.showdata4;
 this.showdata2 = !this.showdata2
}
AddInvoice3(){
 this.showdata2= true  ;
 this.showdata4 = false;
}
AddInvoice4(){
 this.showdata2= true  ;
 this.showdata5 = false;
}


view(){
 this.showdata5 = !this.showdata5;
 this.showdata2 = !this.showdata2
}
customerinteraction(){
 this.showdatacust = !this.showdatacust;
 this.showdatacust1 = !this.showdatacust1;
}
customerinteraction1(){
 this.showdatacust = true ;
 this.showdatacust1 = false;
}
customerinteraction2(followupId:any){
 this.showdatacust = !this.showdatacust;
 this.showdatacust2 = !this.showdatacust2;
 localStorage.setItem("followupId", followupId);

}

customerinteraction3(){
 this.showdatacust = true ;
 this.showdatacust2 = false;
}

AddAccountWritting(){
 confirm("Please Select Customer")
}




onclick()
{
 this.ReadMore = !this.ReadMore; //not equal to condition
 this.visible = !this.visible;
 
}


onclick1()
{
 this.visible1 = !this.visible1;
}


onclick2()
{
 this.visible2 = !this.visible2;
}

onclick3()
{
 this.visible3 = !this.visible3;
}

onclick4()
{
 this.visible4 = !this.visible4;
}

onclick5()
{
 this.visible5 = !this.visible5;
}

onclick6()
{
 this.visible6 = !this.visible6;
}

onclick7()
{
 this.visible7 = !this.visible7;
}

onclick8()
{
 this.visible8 = !this.visible8;
}

onclick9()
{
 this.visible9 = !this.visible9;
}

onclick10()
{
 this.visible10 = !this.visible10;
}

onclick11()
{
 this.visible11 = !this.visible11;
}

// onclick15(){
//   this.visible15 = !this.visible15;
//   this.visible16 = !this.visible16;

// }

shownewrole(){
 this.showdata = !this.showdata;
 this.showdata1 = !this.showdata1
}
shownewrole1(){
 this.showdata = true  ;
 this.showdata1 = false;
}
updatedata(){
 this.showadd = !this.showadd ;
 this.showupdate = !this.showupdate;


}

showpayment(){
 this.showdata4 = !this.showdata4;
 this.showdata5 = false;
}
// showadd : boolean = true;
//   showupdate : boolean = false ;






 // updateProfile() {
 //   let profile = {
 //     //     complianceId: this.id,
 //     //     complianceName: this.compliance.complianceName,
 //     //     taxLink: this.compliance.taxLink,
 //     //     complianceDueDate: this.compliance.complianceDueDate
 //     //   };
 //     //   console.log("DATA READY TO SEND ::: ", comp);
 //   }
 //   console.log("resppppp", this.addform.value);
 //   this.apiservice.updateProfile(this.addform.value).subscribe(
 //     (response: any) => {
 //       console.log("resppppp", this.addform.value);
 //     },
 //     (error: any) => { console.error(error); }
 //   );
 // }

// UpdateProductDetails(){
//   this.apiService.updateProductSer(){

//   }
// }

//product

getproductdetails(accountno:any){
 
  this.apiService.getProductSer(this.accountNo).subscribe(
    (res:any)=>{
      this.customeraccountdetails =res.data
//  console.log("dataaaa", res.data);
 // this.getproddetails = res.data ;
 
    },
    (error:any)=>{console.error(error);
    }
  )
 
 }
onSubmit()
{
   let comp = {
             // productName : this.customeraccountdetails.productName,
             assignDate: this.customeraccountdetails.assignDate,
             expiryDate: this.customeraccountdetails.expiryDate,
             dueDate: this.customeraccountdetails.dueDate,
             // nextInvoiceDate : "2023-12-03" ,
             invoiceId: this.customeraccountdetails.invoiceId,
             productId: this.customeraccountdetails.productId,
             id : this.customeraccountdetails.id,
             accountNo:this.customeraccountdetails.accountNo
           };

   this.apiService.updateProductSer(comp).subscribe(
   (response:any)=>{
    //  console.log(response.data);
     Swal.fire({
       title: "Record Updated!",
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

//CustomerInteraction

getCUstInteractiondetails(accountno:any){
  // var accountno = 
this.apiService.getCustomerInteraction(this.accountNo).subscribe(
(res:any)=>{
  this.customerinteractiondetails =res.data;
  // localStorage.setItem("followupId", res.data.followupId);
  // localStorage.setItem("followupId", this.customerinteractiondetailsobj.followupId);
// console.log("customerinteractiondetails", res.data);


// this.getproddetails = res.data ;

},
(error:any)=>{console.error(error);
}
)

}
AddcustInteraction(){
//  console.log("AddcustInteraction",this.addcustInteractionForm.value);

 this.apiService.addCustInteraction(this.addcustInteractionForm.value).subscribe(
   (response:any)=>{
    //  console.log("AddcustInteraction",response.data);
     Swal.fire({
       title: "Record Saved!",
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
edit(id:any){
  this.router.navigate([`/set/view-branch/`+id])
}

updateCustInteraction(){

// console.log("updateCustInteraction ::::: ", this.UpdatecustInteractionForm.value);
let followupId = localStorage.getItem("followupId");

if (!followupId) {
 console.error("FollowupId not found in local storage");
 return;
}
this.UpdatecustInteractionForm.patchValue({
 followupId: followupId,
 // Other form fields can be updated similarly based on your data structure
});
// localStorage.getItem
     this.apiService.updateCustInteraction(this.UpdatecustInteractionForm.value,).subscribe(
     (response:any)=>{
      //  console.log(response.data);
       Swal.fire({
         title: "Record Updated!",
         icon: "success"
       });
      //  setInterval(()=>{window.location.reload()},1000);
     },
     (error:any)=>{
       console.error(error);
       Swal.fire({
         title: "Error!",
         icon: "error"
       });
       // setInterval(()=>{window.location.reload()},1000);
     }
   );
 }
 deletecustInteraction(followupId:any){
   Swal.fire({
     title: "Are you sure?",
     text: "You won't be able to revert this!",
     icon: "warning",
     showCancelButton: true,
     confirmButtonColor: "#3085d6",
     cancelButtonColor: "#d33",
     confirmButtonText: "Yes, delete it!"
     }).then((result) => {
     if (result.isConfirmed) 
     {
       this.apiService.deleteCustInteraction(followupId).subscribe(
       (response:any)=>{
         console.log(response.data);
         Swal.fire({
           title: "Record Deleted!",
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
      //  setInterval(()=>{window.location.reload()},1000);
     }
   });
   
 }

 //voucher

 getVoucher(acccountNo : any){
   this.accountNo = this.route.snapshot.params['accountNo'];
   this.apiService.getVoucher(this.accountNo).subscribe(
     (res:any)=>{
       this.voucherdetails =res.data;
       // localStorage.setItem("followupId", res.data.followupId);
       // localStorage.setItem("followupId", this.customerinteractiondetailsobj.followupId);
//  console.log("getvoucher", res.data);
 // this.getproddetails = res.data ;
 
     },
     (error:any)=>{console.error(error);
     }
   )
 }

 
// AddVoucher(){
//  // console.log("AddcustInteraction",this.addvoucher.value);

//  this.apiService.addVoucher(this.addvoucher.value).subscribe(
//    (response:any)=>{
//      console.log("AddVoucher",response.data);
//      Swal.fire({
//        title: "Record Saved!",
//        icon: "success"
//      });
//    },
//    (error:any)=>{
//      console.error(error);
//      Swal.fire({
//        title: "Error!",
//        icon: "error"
//      });
//    }
//  );
//  // setInterval(()=>{window.location.reload()},1000);
// }

AddVoucher() {
  // console.log("AddcustInteraction,,,,,,,", this.accountList.accountNo);
  // console.log("AddcustInteraction***********", this.addvoucher.value);
// console.log("Photo****************",this.photo)
  this.apiService.addVoucher(this.addvoucher.value, this.photo).subscribe(
    (response: any) => {
      // console.log("AddVoucher", response.data);
      Swal.fire({
        title: "Record Saved!",
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
shokyc(){
 this.showkyc = !this.shokyc
}


//ooccupation n income

getTaxPlanning(){
 this.accountNo = this.route.snapshot.params['accountNo']; 
this.apiService.getIncomeTax(this.accountNo).subscribe(
(res:any)=>{
 this.taxplanningdetails =res.data;
 // localStorage.setItem("followupId", res.data.followupId);
 // localStorage.setItem("followupId", this.customerinteractiondetailsobj.followupId);
// console.log("TaxPlandetails********", res.data);
// this.getproddetails = res.data ;

},
(error:any)=>{console.error(error);
}
)

}

addIncomeTax(){
 

 // console.log("AddIncomeTax",this.addTaxPlanning.value);
 // this.accountNo = this.route.snapshot.params['accountNo'];
 // let data= {
 //   this.accountNo = this.route.snapshot.params['accountNo']

 // }
 this.apiService.addIncomeTax(this.addTaxPlanning.value).subscribe(
   (response:any)=>{
    //  console.log("AddVoucher",response.data);
     Swal.fire({
       title: "Record Saved!",
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


updateTaxPlanning(){
//  console.log("UpdateIncomeTax",this.UpdateTaxPlanning.value);
 this.apiService.updateTaxPlanning(this.UpdateTaxPlanning.value,).subscribe(
   (response:any)=>{
    //  console.log(response.data);
     Swal.fire({
       title: "Record Updated!",
       icon: "success"
     });
    //  setInterval(()=>{window.location.reload()},1000);
   },
   (error:any)=>{
     console.error(error);
     Swal.fire({
       title: "Error!",
       icon: "error"
     });
     // setInterval(()=>{window.location.reload()},1000);
   }
 );
}




// addaccountwriting(){
//  //change api
//  this.apiService.addIncomeTax(this.addAccountWritting.value).subscribe(
//    (response:any)=>{
//      console.log("AddVoucher",response.data);
//      Swal.fire({
//        title: "Record Saved!",
//        icon: "success"
//      });
//    },
//    (error:any)=>{
//      console.error(error);
//      Swal.fire({
//        title: "Error!",
//        icon: "error"
//      });
//    }
//  );
//  // setInterval(()=>{window.location.reload()},1000);
// }

//profile
updateProfile() {
  // console.log("resppppp", this.addform.value);
  this.apiService.updateProfile(this.addform.value).subscribe(
    (response: any) => {
      // console.log("resppppp,,,,,,,,,,,,,,,,,,", this.addform.value);
    },
    (error: any) => { console.error(error); }
  );
}


// onsubmit2() {
//   console.log("Get Signatory,,,,,, ::::::: ", this.step2.value, this.photo, this.sign);
//   this.apiService.aof2Form(this.step2.value, this.photo, this.sign).subscribe(
//     (response: any) => {
//       // console.log('Get Signatory,,,,,,', response.data);
//     },
//     (error: any) => {
//       console.error("not workingggg", error);
//     }
//   )
// }

// billing
getbilling(InvoiceId:any){

  // this.accountNo = this.route.snapshot.params['accountNo']; 
this.apiService.getbillingmain(1000).subscribe(
(res:any)=>{
  this.taxplanningdetails =res.data;
  // localStorage.setItem("followupId", res.data.followupId);
  // localStorage.setItem("followupId", this.customerinteractiondetailsobj.followupId);
console.log("GetBillingdetails********", res.data);
// this.getproddetails = res.data ;

},
(error:any)=>{console.error(error);
}
)


}
}
