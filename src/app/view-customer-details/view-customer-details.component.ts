import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewCustomerdetailNewModel } from './view-customer-details.component.model';


import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TidService } from '../tid.service';
import { ProductModel } from './product.model';
import { accountModel } from './account.model';
import { complianceModel } from './compliance.model';
import { billingModel } from './billing.model';
import { ProfileModel } from './profile.model';
import { ViewCustomerdetailModelNew } from './viewnew.model';
import Swal from 'sweetalert2';
import { acWriting } from '../view-customer-details-new/accountwrittingModel';
import { kycModel } from '../view-customer-details-new/kycModel';
import { bankStatementListModel } from '../view-customer-details-new/bankstatementlistModel';
import { CustomerDocs } from '../view-customer-details-new/customerdocsModel';
import { AuthorisedSignatoryModel } from '../view-customer-details-new/authorisedsigntoryModel';
import { transactionModel } from '../view-customer-details-new/transactionModel';
import { VoucherModel } from '../view-customer-details-new/voucherModel';
import { AofTwomodel } from '../accountopening-form/aofmodel2';
import { ViewCustomerdetailModel } from '../view-customer-details-new/view-customer-details-new.model';
import { CustInteractionModel } from '../view-customer-details-new/customerinteractionModel';
import { TaxPlanningModel } from '../view-customer-details-new/taxplanningModel';
import { UpdateVoucherModel } from '../view-customer-details-new/updatevoucherModel';
import { authsignIdModel } from './authsignIdModel';
import { AuthSignModel } from './uthsignModel';
import { AuthKYCModel } from './authKYCModel';
import { VehicleModel } from './vehicleModel';
import { TaxListModel } from './TaxListModel';
import { getKycByIdModel } from './getkycbyIdModel';
import { billingmainModel } from './billingmainModel';
import { TaxTypeModel } from './taxTypeModel';
import { InvestmentModel } from './investmentModel';
import { AccDetailsModel } from './accdetailsModel';
import { SalesInvoicesModel } from './salesinvoicesModel';
import { bankstatementModel } from './bankstatementModel';
import { bankdetailsModel } from './bankdetauilsModel';
import { AddLoanModel } from './addloanModel';
import { occupationIncomeListModel } from './occupatinincomeListModel';
import { AccountWritingModel } from './accwritinglistModel';
import { acWritingByIdModel } from './accwritingbyidModel';

@Component({
  selector: 'app-view-customer-details',
  templateUrl: './view-customer-details.component.html',
  styleUrls: ['./view-customer-details.component.css']
})
export class ViewCustomerDetailsComponent {
  //Accounting
  AccountOverview: boolean = false;
  SalesReport: boolean = false;
  PurchaseReport: boolean = false;
  StokeStatement: boolean = false;
  DebtorsCreditors: boolean = false;
  ExpenseReports: boolean = false;
  TurnoverReport: boolean = false;
  SuspenseReport: boolean = false;
  FinalStatement: boolean = false;
  ProjectReport: boolean = false;
  PISReport: boolean = false;

  //Taxes
  Guidelines: boolean = false;
  StatementofIncomet: boolean = false;
  AdvanceTax: boolean = false;
  AnnualTaxStatement: boolean = false;
  ITReturnss: boolean = false;
  IncomeTaxAudits: boolean = false;
  Refundt: boolean = false;
  Notices: boolean = false;
  TaxPaidChallan: boolean = false;

  //GST Regular
  Guidlines1: boolean = false;
  GSTRegistration: boolean = false;
  E_WayBills: boolean = false;
  GSTWorking: boolean = false;
  GSTR2A_2BReport: boolean = false;
  ITCReport: boolean = false;
  RCMReport: boolean = false;
  GSTR1: boolean = false;
  GSTR3B: boolean = false;
  GSTAudit: boolean = false;
  GSTRegularAudit: boolean = false;
  GSTR10: boolean = false;
  GSTRegularNotices: boolean = false;

  //GST Composition
  Guidlines2: boolean = false;
  GSTRegistrationForm: boolean = false;
  GSTWorking1: boolean = false;
  GSTRCMP08: boolean = false;
  GSTR4: boolean = false;
  TaxPaymentChallans: boolean = false;
  GSTCompositionNotices: boolean = false;

  //GST CompositTax Deducted at Source (TDS)
  Guidlines3: boolean = false;
  TANRegistration: boolean = false;
  TDSWorking: boolean = false;
  TDSPaymentChallan: boolean = false;
  TDSFiling: boolean = false;
  TDSCertificate: boolean = false;

  //Tax Collected at Source (TCS)
  Guidlines4: boolean = false;
  TCSWorking: boolean = false;
  TCSPaymentChallan: boolean = false;
  TCSFiling: boolean = false;
  TCSCertificate: boolean = false;

  //Tax Collected at Source (TCS)
  Guidlines5: boolean = false;
  Registration: boolean = false;
  PTECChallan: boolean = false;
  PTECPaymentChallan: boolean = false;

  //Professional Tax Registration Certificate (PTRC)
  Guidlines6: boolean = false;
  Registration1: boolean = false;
  PTRCWorking: boolean = false;
  PTRCChallan: boolean = false;
  PTRCPaymentChallan: boolean = false;

  //Audits
  Guidlines7: boolean = false;
  InternalAudits: boolean = false;
  FinancialAudits: boolean = false;
  ComplianceAudits: boolean = false;
  StockAudit: boolean = false;
  IncomeTaxAudit: boolean = false;
  GSTAudit1: boolean = false;
  Others: boolean = false;

  //Business Registration
  ProprietorshipRegistration: boolean = false;
  PartnershipRegistration: boolean = false;
  CompanyRegistration: boolean = false;
  TrustAssociation: boolean = false;
  HUFRegistration: boolean = false;

  //Loan Service Request
  FreeCreditScore: boolean = false;
  NewHomeLoan: boolean = false;
  LoanAgainstProperty: boolean = false;
  BusinessLoan: boolean = false;
  HomeLoan: boolean = false;
  CashCredit: boolean = false;
  LoanAgainstSecurity: boolean = false;
  GoldLoan: boolean = false;
  CarLoan: boolean = false;
  CommercialVehicleLoan: boolean = false;
  InfrastructureFinanceLoan: boolean = false;
  EMICalculatorHomeLoan: boolean = false;
  EligibilityCalculatorHomeLoan: boolean = false;
  MicroLoanUnder: boolean = false;
  TransferHomeLoan: boolean = false;
  TransferBusinessLoan: boolean = false;
  OverDraft: boolean = false;

  //Service Requests
   FraudandDispute: boolean = false;
   AccountServiceRequest: boolean = false;
   DuplicateStatementRequest: boolean = false;
   TrackYourOrder: boolean = false;

  //Insurance
  PersonalAccidentProtection: boolean = false;
  HealthInsurance: boolean = false;
  HospitalDailyCashPlans: boolean = false;
  FamilyProtectionPlans: boolean = false;
  LifeCover: boolean = false;
  AssuredSavingsPlan: boolean = false;
  GuaranteedSavingsPlan: boolean = false;
  TwoWheelerInsurance: boolean = false;
  CarInsurance: boolean = false;
  CommercialVehicleInsurance: boolean = false;
  PradhanMantriJivanJyotiBimaYojna: boolean = false;
  PradhanMantriSurakshaBimaYojna: boolean = false;
  MyPolicies: boolean = false;
  
  


  step1 !: FormGroup;
  step2 !: FormGroup;
  employeeForm !: FormGroup;
  employeeForm1 !: FormGroup;
  addform !: FormGroup;
  SearchText: any;
  branchid: number | undefined;
  branchname: any;
  branchcode: any;
  branchcity: any;
  branchaddress: any;
  step4 !: FormGroup;
  addbankstatement !: FormGroup;
  savebankdetails!: FormGroup;
  // addbankstatement !: FormGroup;
  kycupdate!: FormGroup;
  vehicle !: FormGroup;

  photoEmp1 = localStorage.getItem('photoEmp');

  tax!: FormGroup;
  addvoucher !: FormGroup;
  updatevoucher !: FormGroup;
  page = 1;
  pageSize = 10;

  currentPage: number = 1;
  countries: ViewCustomerdetailModel[] | undefined;
  collectionSize = 100;
  activeTab: string = 'tab1';
  activeTab1: string = 'tabstate';
  ReadMore: boolean = true;
  visible: boolean = true;
  visible1: boolean = true;
  visible2: boolean = true;
  visible3: boolean = true;
  visible4: boolean = true;
  visible5: boolean = true;
  visible6: boolean = true;
  visible7: boolean = true;
  visible8: boolean = true;
  visible9: boolean = true;
  visible10: boolean = true;
  visible11: boolean = true;
  visible15: boolean = true;
  visible16: boolean = false;
  showdata: boolean = true;
  showdata1: boolean = false;
  showdata2: boolean = true;
  showdata7: boolean = false;
  showdata3: boolean = false;
  showdata4: boolean = false;
  showdata6: boolean = false;
  showdata5: boolean = false;
  showadd: boolean = true;
  showupdate: boolean = false;
  addcustInteractionForm !: FormGroup;
  UpdatecustInteractionForm !: FormGroup;
  addinvoiceform !: FormGroup;
  UpdateinvoiceitemForm!: FormGroup;
  addpaymentForm !: FormGroup;
  updatepaymentForm !: FormGroup;
  loan!: FormGroup;
  showdatacust: boolean = true;
  showdatacust1: boolean = false;
  showdatacust2: boolean = false;
  addTaxPlanning !: FormGroup;
  UpdateTaxPlanning !: FormGroup;
  addAccountWritting !: FormGroup;
  SaveinvoiceItemForm !: FormGroup;
  customeraccountdetails1: ViewCustomerdetailModel = new ViewCustomerdetailModel;
  customeraccountdetails: ViewCustomerdetailModel[] = [];
  getcompanyusedetails: ViewCustomerdetailModel[] = [];
  Newdata: ViewCustomerdetailModelNew = new ViewCustomerdetailModelNew();

  Newdata1: ViewCustomerdetailNewModel = new ViewCustomerdetailNewModel();

  signitury: ViewCustomerdetailNewModel[] = [];

  productList: ProductModel = new ProductModel();
  accountList: accountModel = new accountModel();
  compliancesList: complianceModel = new complianceModel();
  BillingList: billingModel = new billingModel();
  AddAuthSign: AuthSignModel = new AuthSignModel();
  authsignIdList: authsignIdModel = new authsignIdModel;
  AddCustKYC: AuthKYCModel = new AuthKYCModel();
  ProfileList: ProfileModel = new ProfileModel();
  acWritingList: acWriting[] = [];
  customerinteractiondetails: CustInteractionModel[] = [];
  customerinteractiondetailsobj: CustInteractionModel = new CustInteractionModel();
  updatesignatory !: FormGroup;
  updateaccountwriting !: FormGroup;
  kycList: kycModel[] = [];
  bankStatementList: bankStatementListModel[] = [];
  getDocList: CustomerDocs = new CustomerDocs();
  invoiceId = localStorage.getItem('invoiceIdtrans');
  VehicleList: VehicleModel = new VehicleModel();
  TaxList: TaxListModel = new TaxListModel();
  SignatoryList: AuthorisedSignatoryModel[] = [];
  getKycById: getKycByIdModel = new getKycByIdModel();
  transactionList: transactionModel[] = [];
  voucherdetails: VoucherModel[] = [];
  taxplanningdetails: TaxPlanningModel[] = [];
  billingmaindetails: billingmainModel = new billingmainModel();
  billingmaindetailsarr: billingmainModel[] = [];
  billingmaindetailsarr1: billingmainModel[] = [];
  TaxTypeList: TaxTypeModel[] = [];
  InvestmentList: InvestmentModel = new InvestmentModel();
  AccDetailsList: AccDetailsModel[] = [];
  salesInvoiceList: SalesInvoicesModel = new SalesInvoicesModel();
  bankstatementList: bankstatementModel = new bankstatementModel();
  bankdetailslist: bankdetailsModel = new bankdetailsModel();
  AddLoanList: AddLoanModel = new AddLoanModel();
  investment !: FormGroup;
  accountwriting !: FormGroup;
  individual: boolean = true;
  nonindividual: boolean = false;
  selfemployee: boolean = false;
  occupationIncomeList: occupationIncomeListModel = new occupationIncomeListModel();
  AccountWritingList: AccountWritingModel = new AccountWritingModel();
  // billingmaindetails : billingmainModel[] = [] ;
  updateoccupationincome!: FormGroup;
  acWritingByIdList: acWritingByIdModel = new acWritingByIdModel;
  AOF2: AofTwomodel = new AofTwomodel();
  accountNo = localStorage.getItem('accountNo');



  id!: number;
  tidData = {
    tid: 0
  }
  accdata = {
    accountNo: 0
  }

  productList1: any[] = [{
    minValue: 0,
    productId: 0,
    maxValue: 0,
    productName: ''
  }];



  URL: any;
  photo!: File;
  sign!: File;
  accDocumentImage!: File;
  onAccWriting(event: any) {
    this.accDocumentImage = event.target.files[0];
  }

  // receiptImage!: File;

  // onReceiptImage(event: any) {
  //   this.receiptImage = event.target.files[0];
  // }


  docImage!: File;
  onDocImageSelected(event: any) {
    this.docImage = event.target.file[0];
  }


  //Cust KYC
  bankstatement!: File;
  onBankStatement(event: any) {
    this.bankstatement = event.target.files[0];
  }

  //bankdetails
  bankdetails!: File;
  onBankDetails(event: any) {
    this.bankdetails = event.target.files[0];
  }

  //salesinvoice
  salesinvoice!: File;
  onSalesInovice(event: any) {
    this.salesinvoice = event.target.files[0];
  }

  //purchaseinvoice
  purchaseinvoice!: File;
  onPurchaseInvoice(event: any) {
    this.purchaseinvoice = event.target.files[0];
  }

  //expense
  expense!: File;
  onExpense(event: any) {
    this.expense = event.target.files[0];
  }

  //loandetails
  loandetails!: File;
  onLoandetails(event: any) {
    this.loandetails = event.target.files[0];
  }

  //chequbookdetails
  chequbookdetails!: File;
  onChequBookDetails(event: any) {
    this.chequbookdetails = event.target.files[0];
  }

  //payslipdetails
  payslipdetails!: File;
  onPaySlipDetails(event: any) {
    this.payslipdetails = event.target.files[0];
  }

  //investmentdetails
  investmentdetails!: File;
  onInvestmentDetails(event: any) {
    this.investmentdetails = event.target.files[0];
  }

  //taxdetails
  taxdetails!: File;
  onTaxDetails(event: any) {
    this.taxdetails = event.target.files[0];
  }

  //vehicledetails
  vehicledetails!: File;
  onVehicalImageSelected(event: any) {
    this.vehicledetails = event.target.files[0];
  }


  onPhotoSelected(event: any) {
    this.photo = event.target.files[0];
  }

  onSignSelected(event: any) {
    this.sign = event.target.files[0];
  }

  AOF3name: any;
  docCategoryList = [{
    name: '',
    id: 0,
    cid: 0
  }]

  document: any;
  docType = [{
    name: '',
    id: 0,
    catId: 0
  }]

  data1 = [{
    taxName: "",
    fromDate: "",
    toDate: "",
    paidDate: "",
    paidAmount: 0,
    description: "",
    taxPlanningId: 0,
    accountNo: 0,
    insertBy: 0
  }];
  data2 = [{

  }]

  company = [{
    RMCode: "",
    approveBy: "",
    SerAccWrite: "",
    RMEmpCode: "",
    complianceManagerCode: "",
    LGC: "",
    SerInvPlan: 0,
    accFreqState: "",
    branch: "",
    tid: 0,
    sourceCode: "",
    collectionManagerCode: "",
    operationMode: 0,
    SerTaxPlan: 0,
    empCode: "",
    accountsManagerCode: "",
    acc_source_date: "",
    id: 0,
    tempCustLeadConvertorCode: "",
    SerFinPlan: "",
    // acc_source_date: ""

  }]
  customerDocumentId: any;
  idforaccwritingupdate: any;
  Voucher: UpdateVoucherModel = new UpdateVoucherModel();


  constructor(private formBuilder: FormBuilder, private apiservice: ApiService, private sharedService: TidService, private route: ActivatedRoute, private router: Router) {


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
      // tids :  this.id,
      // org_ind_details_id: ['', Validators.required],
      // date: ['', Validators.required],
      // pan: ['', Validators.required],
      // aadhaar: ['', Validators.required],
      // tan: ['', Validators.required],
      // pt: ['', Validators.required],
      // gst: ['', Validators.required],
      // uin: ['', Validators.required],
      // tasc: ['', Validators.required],
      // email: ['', Validators.required],
      // address: ['', Validators.required],
      // maddress: ['', Validators.required],


      // city: ['', Validators.required],
      // mcity: ['', Validators.required],
      // pin: ['', Validators.required],
      // mpin: ['', Validators.required],
      // telephone: ['', Validators.required],
      // mTelephone: ['', Validators.required],
      // mobileNumber: ['', Validators.required],
      // mMobile: ['', Validators.required],
      // whatsAppNo: ['', Validators.required],
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
      Product: ['', Validators.required],
      assigndate: ['', Validators.required],
      expirydate: ['', Validators.required],
      duedate: ['', Validators.required]
    });


    this.step2 = this.formBuilder.group({
      tid: ['', Validators.required],
      name: ['', Validators.required],
      shortName: ['', Validators.required],
      date: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      religion: ['', Validators.required],
      motherName: ['', Validators.required],
      designation: ['', Validators.required],
      mobile: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.required],
      serFinanPlan: ['', Validators.required],
      serAccWrite: ['', Validators.required],
      serInvestPlan: ['', Validators.required],
      serTaxPlan: ['', Validators.required],
      authIdOne: [0, Validators.required]
      // tid :  ['', Validators.required]
    });

    this.addvoucher = this.formBuilder.group({
      accountNo: localStorage.getItem('accountNo'),
      voucherDate: ['', Validators.required],
      paymentDate: ['', Validators.required],
      amount: ['', Validators.required],
      paymentMode: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.updatevoucher = this.formBuilder.group({
      id: localStorage.getItem('UpdateVoucherId'),
      accountNo: localStorage.getItem('accountNo'),
      paidReceipt: localStorage.getItem('paidReceipt'),
      voucherDate: ['', Validators.required],
      paymentDate: ['', Validators.required],
      amount: ['', Validators.required],
      paymentMode: ['', Validators.required],
      description: ['', Validators.required],
    })


    this.addcustInteractionForm = this.formBuilder.group({
      accountNo: localStorage.getItem('accountNo'),
      branchId: localStorage.getItem('branchId'),
      status: ['', Validators.required],
      followupType: ['', Validators.required],
      followupByWhom: ['', Validators.required],
      date: ['', Validators.required],
      discription: ['', Validators.required],
      nextDate: ['', Validators.required],
      isVisited: false

    })

    this.UpdatecustInteractionForm = this.formBuilder.group({
      accountNo: localStorage.getItem('accountNo'),
      branchId: localStorage.getItem('branchId'),
      status: ['', Validators.required],
      followupType: ['', Validators.required],
      followupByWhom: ['', Validators.required],
      date: ['', Validators.required],
      discription: ['', Validators.required],
      nextDate: ['', Validators.required],
      isVisited: false,
      // followupId : ['', Validators.required]
      followupId: localStorage.getItem("followupId")

    })


    this.addTaxPlanning = this.formBuilder.group({
      // accountNo : localStorage.getItem("acccountNo") ,
      accountNo: this.route.snapshot.params['accountNo'],
      taxName: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      paidDate: ['', Validators.required],
      paidAmount: ['', Validators.required],
      description: ['', Validators.required],


    })


    this.addinvoiceform = this.formBuilder.group({
      accountNo: localStorage.getItem('accountNo'),
      // accountNo : this.route.snapshot.params['accountNo'],
      // taxName : ['', Validators.required],
      invoiceDate: ['', Validators.required],
      dueDate: ['', Validators.required],
      branch: localStorage.getItem('branchId'),
      branchType: 1
      // description:['', Validators.required],


    })

    this.SaveinvoiceItemForm = this.formBuilder.group({
      // accountNo : localStorage.getItem("acccountNo") ,
      invoiceId: localStorage.getItem('invoiceIdtrans'),
      type: [''],
      prdSrvId: ['', Validators.required],
      discription: ['', Validators.required],
      itemFees: ['', Validators.required],
      discountRate: ['', Validators.required],
      discountAmount: ['', Validators.required],
      taxRate: ['', Validators.required],
      taxAmount: ['', Validators.required],
      itemTotal: ['', Validators.required],
      assesmentYear: ['', Validators.required]
    })

    this.UpdateinvoiceitemForm = this.formBuilder.group({
      invoiceId: localStorage.getItem('invoiceIdtrans'),
      // type : [''],
      itemId: ['', Validators.required],
      discription: ['', Validators.required],
      itemFees: ['', Validators.required],
      discountRate: ['', Validators.required],
      discountAmount: ['', Validators.required],
      taxRate: ['', Validators.required],
      taxAmount: ['', Validators.required],
      itemTotal: ['', Validators.required],
      assesmentYear: ['', Validators.required],
      type: ['', Validators.required],
    })

    this.addpaymentForm = this.formBuilder.group({
      invoiceId: localStorage.getItem('invoiceIdtrans'),
      amount: ['', Validators.required],
      accountNo: localStorage.getItem('accountNo'),
      transactionDate: ['', Validators.required],
      discription: ['', Validators.required],
      paymentMode: ['', Validators.required],
      paymentType: ['', Validators.required],
      paidAgainst: ['', Validators.required],
    })

    this.updatepaymentForm = this.formBuilder.group({
      transId: localStorage.getItem('transId'),
      invoiceId: localStorage.getItem('invoiceIdtrans'),
      amount: ['', Validators.required],
      accountNo: localStorage.getItem('accountNo'),
      transactionDate: ['', Validators.required],
      discription: ['', Validators.required],
      paymentMode: ['', Validators.required],
      paymentType: ['', Validators.required],
      paidAgainst: ['', Validators.required],
    })

    this.updatesignatory = this.formBuilder.group({
      id: localStorage.getItem('authsignId'),
      tid: [0, Validators.required],
      name: ['', Validators.required],
      shortName: ['', Validators.required],
      date: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      religion: ['', Validators.required],
      motherName: ['', Validators.required],
      designation: ['', Validators.required],
      mobile: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.required],
      serFinanPlan: ['', Validators.required],
      serAccWrite: ['', Validators.required],
      serInvestPlan: ['', Validators.required],
      serTaxPlan: ['', Validators.required],
      authIdOne: [0, Validators.required]
    });

    this.step4 = this.formBuilder.group({
      tid: [0, Validators.required],
      customerDocumentCategoryId: ['', Validators.required],
      description: ['', Validators.required],
      customerDocumentType: ['', Validators.required],
      bankstatement: ['', Validators.required]
    });

    this.addbankstatement = this.formBuilder.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      accountNo: ['', Validators.required],
      bankDetailsId: [0, Validators.required],
      description: ['', Validators.required]
    })

    //kycupdate
    this.kycupdate = this.formBuilder.group({
      customerDocumentType: ['', Validators.required],
      customerDocumentCategoryId: ['', Validators.required],
      customerdocumentId: ['', Validators.required],
      description: ['', Validators.required],
      tid: ['', Validators.required],
    })

    //investment
    this.investment = this.formBuilder.group({
      dateOfMaturity: ['', Validators.required],
      nameOfInvestor: ['', Validators.required],
      investmentCompany: ['', Validators.required],
      premiumAmount: ['', Validators.required],
      accountNo: ['', Validators.required],
      policyNo: ['', Validators.required],
      mode: ['', Validators.required]
    })

    //vehicle
    this.vehicle = this.formBuilder.group({
      vehicleType: ['', Validators.required],
      insurance: ['', Validators.required],
      currentValue: ['', Validators.required],
      purpose: ['', Validators.required],
      accountNo: ['', Validators.required],
      goal: ['', Validators.required],
      description: ['', Validators.required],
      vehicledetails: ['', Validators.required]
    })


    this.addbankstatement = this.formBuilder.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      accountNo: ['', Validators.required],
      bankDetailsId: [0, Validators.required],
      description: ['', Validators.required]
    })

    //saveBankDetails
    this.savebankdetails = this.formBuilder.group({
      bankName: ['', Validators.required],
      bankAccountNo: ['', Validators.required],
      accountNo: ['', Validators.required],
      bankAccountTitle: ['', Validators.required],
      bankAccountType: ['', Validators.required]
    })
    //tax
    this.tax = this.formBuilder.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      taxType: ['', Validators.required],
      amount: ['', Validators.required],
      accountNo: ['', Validators.required],
      description: ['', Validators.required],
      // emi: ['', Validators.required],
      // currentInterestRate :['', Validators.required]
    })

    this.loan = this.formBuilder.group({
      loanType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      bank: ['', Validators.required],
      accountNo: ['', Validators.required],
      outstandingAmount: ['', Validators.required],
      emi: ['', Validators.required],
      currentInterestRate: ['', Validators.required]
    })



    // accountWriting
    this.accountwriting = this.formBuilder.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      accountNo: ['', Validators.required],
      description: ['', Validators.required]
    })
    this.updateaccountwriting = this.formBuilder.group({
      id: localStorage.getItem('idforaccwritingupdate1'),
      document: 'Document',
      accountNo: localStorage.getItem('accountNo'),
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      // accountNo: ['', Validators.required],income
      description: ['', Validators.required]
    })

    //updateoccupationincome
    this.updateoccupationincome = this.formBuilder.group({
      id: localStorage.getItem('idforoccupatin&income'),
      businessNature: ['', Validators.required],
      type: ['', Validators.required],
      name: ['', Validators.required],
      industrySector: ['', Validators.required],
      compliances: this.formBuilder.array([])
      // compliances: ['', Validators.required]
      // compliances : this.occupationIncomeList.compliances
    })


  }

  applyFilter(): void {
    const searchString = this.SearchText.toLowerCase();
    const filteredData = [...this.customeraccountdetails];
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

  show1() {
    this.individual = true;
    this.nonindividual = false;
    this.selfemployee = false;
  }
  show2() {
    this.individual = false;
    this.nonindividual = true;
    this.selfemployee = false;
  }
  show3() {
    this.individual = false;
    this.nonindividual = false;
    this.selfemployee = true;
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
    } else if (id === 'tab3') {
      this.activeTab = 'tab3';
    }
  }


  delete(id: number) {
    console.log('ID :::::', id);
    this.apiservice.deleteAuthorisedSignatory(id).subscribe(
      (response: any) => {
        console.log(response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }


  deleteBankStatements(id: number) {
    confirm("Are you sure to delete this record...")

    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteDoc2(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload(); deleteKYCDocument
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteSalesDocument(id: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteSalesDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }


  deletePurchaseDocument(id: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deletePurchaseDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteExpenseDocument(id: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteExpenseDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteLoanDocument(id: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteLoanDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteCheckBooksDocument(id: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteCheckBooksDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deletePayInSlipDocument(id: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deletePayInSlipDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteInvestmentDocument(id: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteInvestmentDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteTaxesDocument(id: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteTaxesDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteVehicleDocument(id: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', id);
    this.apiservice.deleteVehicleDocument(id).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }


  deleteVoucher(voucherId: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', voucherId);
    this.apiservice.deleteVoucher(voucherId).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteKYCDocument(voucherId: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', voucherId);
    this.apiservice.deleteKYCDocument(voucherId).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload(); 
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteAccWriting(voucherId: number) {
    confirm("Are you sure to delete this record...")
    //deleteDoc2
    console.log('ID :::::', voucherId);
    this.apiservice.deleteAccWriting(voucherId).subscribe(
      (response: any) => {
        console.log("delete Bank Statements", response.data);
        // window.location.reload(); deleteAccWriting
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  // AddInvoice() {
  //   confirm("Please Select Customer")
  // }

  AddInvoice() {
    // confirm("Please Select Customer")
    this.showdata2 = !this.showdata2;
    this.showdata3 = !this.showdata3
  }
  AddInvoice1() {
    this.showdata2 = true;
    this.showdata3 = false;
  }
  AddInvoice2() {
    // confirm("Please Select Customer")
    this.showdata4 = !this.showdata4;
    this.showdata2 = !this.showdata2
  }
  AddInvoice3() {
    this.showdata2 = true;
    this.showdata4 = false;
  }
  AddInvoice4() {
    this.showdata2 = true;
    this.showdata5 = false;
  }


  view() {
    this.showdata5 = !this.showdata5;
    this.showdata2 = !this.showdata2
  }

  AddAccountWritting() {
    confirm("Please Select Customer")
  }


  onclick() {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible;

  }

  onclick1() {
    this.visible1 = !this.visible1;
  }

  onclick2() {
    this.visible2 = !this.visible2;
  }

  onclick3() {
    this.visible3 = !this.visible3;
  }

  onclick4() {
    this.visible4 = !this.visible4;
  }

  onclick5() {
    this.visible5 = !this.visible5;
  }

  onclick6() {
    this.visible6 = !this.visible6;
  }

  onclick7() {
    this.visible7 = !this.visible7;
  }

  onclick8() {
    this.visible8 = !this.visible8;
  }

  onclick9() {
    this.visible9 = !this.visible9;
  }

  onclick10() {
    this.visible10 = !this.visible10;
  }

  onclick11() {
    this.visible11 = !this.visible11;
  }

  // onclick15(){
  //   this.visible15 = !this.visible15;
  //   this.visible16 = !this.visible16;

  // }

  shownewrole() {
    this.showdata = !this.showdata;
    this.showdata1 = !this.showdata1
  }
  shownewrole1() {
    this.showdata = true;
    this.showdata1 = false;
  }

  updatedata() {
    this.showadd = !this.showadd;
    this.showupdate = !this.showupdate;


  }

  showpayment(transactionId: any) {
    this.showdata6 = !this.showdata6;
    this.showdata5 = false;
    localStorage.setItem('transId', transactionId)
  }

  customerinteraction() {
    this.showdatacust = !this.showdatacust;
    this.showdatacust1 = !this.showdatacust1;
  }
  customerinteraction1() {
    this.showdatacust = true;
    this.showdatacust1 = false;
  }
  customerinteraction2(followupId: any) {
    this.showdatacust = !this.showdatacust;
    this.showdatacust2 = !this.showdatacust2;
    localStorage.setItem("followupId", followupId);

  }

  customerinteraction3() {
    this.showdatacust = true;
    this.showdatacust2 = false;
  }



  ngOnInit() {
    this.id = this.route.snapshot.params['id'];


    this.apiservice.docCategory().subscribe(  //AOF4
      (data: any) => {
        this.docCategoryList = data.docCategory;
        console.log('Response successful!', this.docCategoryList);
      },
      (error: any) => {
        console.error('API Error:', error);
      }
    );

    this.apiservice.productlist().subscribe(  //AOF6
      (data: any) => {
        this.productList = data.data;
      },
      (error: any) => {
        console.error('API Error:', error);
      }
    );


    console.log('@$$$$$$$$$$$$$$$$$$$$$$#3#@$@#$@$#@$#$@$#$@#@$#$@#$@#$@#$', localStorage.getItem('photoEmp'));
    this.apiservice.getFile(this.photoEmp1).subscribe(
      (response: any) => {
        this.photoEmp1 = response;
        // window.open(response);
        console.log("File Response: ", response);
      },
      (error: any) => { console.error("File Error Response: ", error); }
    );


    // this.getVoucher(this.accountNo)

    console.log(this.id);
    this.apiservice.getAccount(this.id).subscribe(
      (response: any) => {
        this.accountList = response.data;
        // console.log("account", response.data);

        localStorage.setItem('accountNo', this.accountList.accountNo);
        localStorage.setItem('branchId', this.accountList.branchId);

        this.apiservice.acWriting(this.accountList.accountNo).subscribe(
          (response: any) => {
            this.acWritingList = response.data;
            // console.log("accWriting", response.data);
          },
          (error: any) => { console.error(error); }
        )

        this.apiservice.getBankStatement(this.accountList.accountNo).subscribe(
          (response: any) => {
            this.bankStatementList = response.data;
            // console.log("bankStatementList,,,,,,, ", response.data);
          },
          (error: any) => { console.error(error); }
        )

        this.apiservice.gettransctiondetails(this.accountList.accountNo).subscribe(
          (response: any) => {
            this.billingmaindetailsarr1 = response.data;
            // console.log("bankStatementList,,,,,,, ", response.data);
          },
          (error: any) => { console.error(error); }
        )


        // getTransaction
        this.apiservice.getTransaction(this.accountList.accountNo).subscribe(
          (response: any) => {
            this.transactionList = response.data;
            localStorage.setItem("invoiceIdtrans", response.data[0].invoceId)
            console.log("transaction,,,,", response.data);
          },
          (error: any) => {
            console.error(error);
          }
        )

        this.apiservice.getVoucher(this.accountList.accountNo).subscribe(
          (res: any) => {
            this.voucherdetails = res.data;
            // localStorage.setItem("followupId", this.customerinteractiondetailsobj.followupId);
            // console.log("getvoucher", res.data);
            // this.getproddetails = res.data ;

          },
          (error: any) => {
            console.error(error);
          }
        )

        // console.log('********** Doc List **************', this.accountList.accountNo);
        this.accdata.accountNo = this.accountList.accountNo;
        this.apiservice.getDoc2(this.accdata).subscribe(
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
    this.apiservice.getSignatory(this.id).subscribe(
      (response: any) => {
        this.signitury = response.data;
        console.log("##################################", response.data)
        console.log("##################################", response.data[0].photo)
        localStorage.setItem('photoEmp', response.data[0].photo)
        console.log("##################################", localStorage.getItem('photoEmp'))

      },
      (error: any) => { console.error(error); }
    )


    console.log(this.id);
    this.apiservice.getCompliances(this.id).subscribe(
      (response: any) => {
        this.compliancesList = response.data;
        // console.log("compliance", response.data);
      },
      (error: any) => { console.error(error); }
    )

    // console.log("dataaaaa*************", this.Newdata.email);
    this.apiservice.getCustomerInfo(this.id).subscribe(
      (response: any) => {
        this.Newdata = response.data;
        localStorage.setItem('branchcode', response.data.branchcode)
        // console.log("branchcode*************", response.data);
      },
      (error: any) => { console.error(error); }
    )


    console.log(this.id);
    this.apiservice.getcompliance2(this.id).subscribe(
      (response: any) => {
        this.productList = response.custPro;
        // console.log("getcompliance2", response.custPro);
        // console.log("getcomplianceproductname", response.custPro.productName);
      },
      (error: any) => { console.error(error); }
    )


    console.log(this.id);
    this.apiservice.getCompanyUse(this.id).subscribe(
      (response: any) => {
        this.Newdata1 = response.data;
        // console.log("companyuse", response.data);
      },
      (error: any) => { console.error(error); }
    )

    console.log(this.id);
    this.apiservice.getBilling(this.id).subscribe(
      (response: any) => {
        this.BillingList = response;
        // console.log("billing", response);
      },
      (error: any) => { console.error(error); }
    )


    this.tidData.tid = this.id;
    // console.log('************** kyc details *******************', this.tidData);
    this.apiservice.getKYCDocuments(this.tidData).subscribe(
      (response: any) => {
        this.kycList = response.document;
        // console.log("kyc,,,,,,,,,,,,,,,,", response);
        // window.location.reload();
      },
      (error: any) => { console.error("kyc error,,,,,,,,,,,,,,,,", error); }
    )

    console.log(this.id);
    this.apiservice.getProfile(this.id).subscribe(
      (response: any) => {
        this.ProfileList = response.data;
        // console.log("ProfileList***************", response.data);
        localStorage.setItem('tidprofile', response.data.tid)
      },
      (error: any) => { console.error(error); }
    )

    //getAuthorisedSignatory  tids: localStorage.getItem('tidprofile'),

    console.log(this.id);
    this.apiservice.getAuthorisedSignatory(this.id).subscribe(
      (response: any) => {
        this.SignatoryList = response.data;
        localStorage.setItem('photo', response.data.photo)
        // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%,,,,,,,,", response.data);
      },
      (error: any) => { console.error(error); }
    )

    this.getproductdetails(this.accountNo);
    this.getCUstInteractiondetails(this.accountNo);
    this.getbillingmain(303);
    this.getinvoiceitem(303);
    this.getinvoiceitemdetailsbyid(303);
    this.gettransctiondetailsbyid(303);

    this.apiservice.productlist().subscribe(  //AOF6
      (data: any) => {
        this.productList1 = data.data;
      },
      (error: any) => {
        console.error('API Error:', error);
      }
    );

  }



  AddVoucher() {
    // console.log("AddcustInteraction,,,,,,,", this.accountList.accountNo);
    console.log("AddcustInteraction***********", this.addvoucher.value);
    console.log("Photo****************", this.photo)
    this.apiservice.addVoucher(this.addvoucher.value, this.photo).subscribe(
      (response: any) => {
        console.log("AddVoucher", response.data);
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
    // setInterval(() => { window.location.reload() }, 1000);
  }

  getVoucherById(id: any) {
    this.apiservice.getVoucherById(id).subscribe(
      (res: any) => {
        this.Voucher = res.data;
        console.log("getvoucher data :::: ", res.data);
        localStorage.setItem('paidReceipt', this.Voucher.paidReceipt);
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  updateVoucherID(id: any) {
    localStorage.setItem('UpdateVoucherId', id)
  }

  updateVoucher() {
    console.log("update Voucher data ***********", this.updatevoucher.value);
    console.log("Photo****************", this.photo)
    this.apiservice.updateVoucher(this.updatevoucher.value, this.photo).subscribe(
      (response: any) => {
        console.log("AddVoucher", response);
        Swal.fire({
          title: "Record Updated!",
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
    // setInterval(() => { window.location.reload() }, 1000);
  }



  // delete(newsAlertId: number) {
  //     console.log('ID :::::', newsAlertId);
  //     this.api.deleteNewsAlert(newsAlertId).subscribe(
  //       (response: any) => {
  //         console.log(response.data);
  //         window.location.reload();
  //       },
  //       (error: any) => {
  //         console.error(error);
  //       }
  //     )
  //   }

  updateProfile() {
    console.log("resppppp", this.addform.value);
    this.apiservice.updateProfile(this.addform.value).subscribe(
      (response: any) => {
        Swal.fire({
          title: "Record Updated!",
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
  }

  // onsubmit2() {
  //   console.log("Get Signatory,,,,,, ::::::: ", this.step2.value, this.photo, this.sign);
  //   this.apiservice.aof2Form(this.step2.value, this.photo, this.sign).subscribe(
  //     (response: any) => {
  //       // console.log('Get Signatory,,,,,,', response.data);
  //     },
  //     (error: any) => {
  //       console.error("not workingggg", error);
  //     }
  //   )
  // }

  onsubmit2() {
    this.AddAuthSign = this.step2.value;
    console.log('ADD Signatory,,,,,,', this.step2.value);
    this.AddAuthSign.tid = this.id;
    console.log("ADD Signatory,,,,, ::::::: ", this.AddAuthSign, this.photo, this.sign);
    this.apiservice.aof2Form(this.AddAuthSign, this.photo, this.sign).subscribe(
      (response: any) => {
        Swal.fire({
          title: "Record Saved!",
          icon: "success"
        });
        console.log('Get Signatory,,,,,,', response.data);
      },
      (error: any) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          icon: "error"
        });
      }
      // (error: any) => {
      //   console.error("not workingggg", error);
      // }
    )
  }

  onsubmit3() {
    this.authsignIdList = this.updatesignatory.value;
    this.authsignIdList.tid = this.id;
    this.authsignIdList.authIdOne = localStorage.getItem('authsignId'),
      console.log("Get Signatory,,,,, ::::::: ", this.authsignIdList, this.photo, this.sign);
    this.apiservice.aof2Form(this.authsignIdList, this.photo, this.sign).subscribe(
      (response: any) => {
        Swal.fire({
          title: "Record Updated!",
          icon: "success"
        });
        console.log('update authorisation,,,,,,', response.data);
      },
      (error: any) => {
        console.error("not workingggg", error);
      }
    )
  }

  //CustomerInteraction

  getCUstInteractiondetails(accountno: any) {
    // var accountno = 
    this.apiservice.getCustomerInteraction(this.accountNo).subscribe(
      (res: any) => {
        // this.getCUstInteractiondetails =res.data;
        this.customerinteractiondetails = res.data;
        // localStorage.setItem("followupId", res.data.followupId);
        // localStorage.setItem("followupId", this.customerinteractiondetailsobj.followupId);
        console.log("customerinteractiondetails", res.data);
        // this.getproddetails = res.data ;

      },
      (error: any) => {
        console.error(error);
      }
    )

  }


  AddcustInteraction() {
    console.log("AddcustInteraction", this.addcustInteractionForm.value);

    this.apiservice.addCustInteraction(this.addcustInteractionForm.value).subscribe(
      (response: any) => {
        //  console.log("AddcustInteraction",response.data);
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
  edit(id: any) {
    this.router.navigate([`/set/view-branch/` + id])
  }

  updateCustInteraction() {

    console.log("updateCustInteraction ::::: ", this.UpdatecustInteractionForm.value);
    let followupId = localStorage.getItem("followupId");

    if (!followupId) {
      console.error("FollowupId not found in local storage");
      return;
    }
    // this.updateCustInteraction.patchValue({
    //  followupId: followupId,

    // });
    // localStorage.getItem
    this.apiservice.updateCustInteraction(this.UpdatecustInteractionForm.value,).subscribe(
      (response: any) => {
        //  console.log(response.data);
        Swal.fire({
          title: "Record Updated!",
          icon: "success"
        });
        setInterval(() => { window.location.reload() }, 1000);
      },
      (error: any) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          icon: "error"
        });
        // setInterval(()=>{window.location.reload()},1000);
      }
    );
  }
  deletecustInteraction(followupId: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiservice.deleteCustInteraction(followupId).subscribe(
          (response: any) => {
            console.log(response.data);
            Swal.fire({
              title: "Record Deleted!",
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
        setInterval(() => { window.location.reload() }, 1000);
      }
    });

  }

  //product

  getproductdetails(accountno: any) {

    this.apiservice.getProductSer(this.accountNo).subscribe(
      (res: any) => {
        this.customeraccountdetails1 = res.data


      },
      (error: any) => {
        console.error(error);
      }
    )

  }

  onSubmit() {
    let comp = {
      // productName : this.customeraccountdetails.productName,
      assignDate: this.customeraccountdetails1.assignDate,
      expiryDate: this.customeraccountdetails1.expiryDate,
      dueDate: this.customeraccountdetails1.dueDate,
      // nextInvoiceDate : "2023-12-03" ,
      invoiceId: this.customeraccountdetails1.invoiceId,
      productId: this.customeraccountdetails1.productId,
      id: this.customeraccountdetails1.id,
      accountNo: this.customeraccountdetails1.accountNo
    };

    this.apiservice.updateProductSer(comp).subscribe(
      (response: any) => {
        //  console.log(response.data);
        Swal.fire({
          title: "Record Updated!",
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


  getTaxPlanning() {
    // this.accountNo = this.route.snapshot.params['accountNo']; 
    this.apiservice.getIncomeTax(this.accountList.accountNo).subscribe(
      (res: any) => {
        this.taxplanningdetails = res.data;
        // localStorage.setItem("followupId", res.data.followupId);
        // localStorage.setItem("followupId", this.customerinteractiondetailsobj.followupId);
        console.log("TaxPlandetails********", res.data);
        // this.getproddetails = res.data ;

      },
      (error: any) => {
        console.error(error);
      }
    )

  }

  addIncomeTax() {


    // console.log("AddIncomeTax",this.addTaxPlanning.value);
    // this.accountNo = this.route.snapshot.params['accountNo'];
    // let data= {
    //   this.accountNo = this.route.snapshot.params['accountNo']

    // }
    this.apiservice.addIncomeTax(this.addTaxPlanning.value).subscribe(
      (response: any) => {
        //  console.log("AddVoucher",response.data);
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



  updateTaxPlanning() {
    //  console.log("UpdateIncomeTax",this.UpdateTaxPlanning.value);
    this.apiservice.updateTaxPlanning(this.UpdateTaxPlanning.value,).subscribe(
      (response: any) => {
        //  console.log(response.data);
        Swal.fire({
          title: "Record Updated!",
          icon: "success"
        });
        setInterval(() => { window.location.reload() }, 1000);
      },
      (error: any) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          icon: "error"
        });
        // setInterval(()=>{window.location.reload()},1000);
      }
    );




  }
  /**
   * 
   * ts-logic for integration
   */
  getBilling(InvoiceId: any) {
    this.apiservice.getBill(303).subscribe((res: any) => this.getBilling = res.data);
  }




  // billing
  getbillingmain(InvoiceId: any) {

    this.apiservice.getbillingmain(303).subscribe(
      (res: any) => {
        this.billingmaindetails = res.data;

        // console.log("GetBillingdetails********", res.data);
        // this.getproddetails = res.data ;

      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  savebillinginvoice() {
    console.log("AddVoucher", this.addinvoiceform.value);
    this.apiservice.savebillinginvoice(this.addinvoiceform.value).subscribe(
      (response: any) => {
        //  console.log("AddVoucher",response.data);
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

  }

  saveinvoiceitem() {
    console.log("SaveInvoiceItemDetail", this.SaveinvoiceItemForm.value);
    this.apiservice.saveinvoiceitem(this.SaveinvoiceItemForm.value).subscribe(
      (response: any) => {
        //  console.log("AddVoucher",response.data);
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
  }

  getinvoiceitem(InvoiceId: any) {

    this.apiservice.getinvoiceitem(303).subscribe(
      (res: any) => {
        console.log("invoiceitem data ::::::: ", res);
        this.billingmaindetailsarr = res.data2;
        localStorage.setItem("itemIdtrans", res.data2[0].invoceId)
        console.log("invoiceitem data ::::::: ", res.data2[0].itemId);
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  UpdateInvoiceitemForm() {
    console.log('UpdateinvoiceitemForm', this.UpdateinvoiceitemForm.value);

    this.apiservice.updateinvoiceitem(this.UpdateinvoiceitemForm.value).subscribe(
      (res: any) => {
        // console.log(response.data);
        Swal.fire({
          title: "Record Updated!",
          icon: "success"
        });
        // setInterval(()=>{window.location.reload()},1000);
      },
      (error: any) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          icon: "error"
        });
        // setInterval(()=>{window.location.reload()},1000);
      }
    )
  }

  getinvoiceitemdetailsbyid(id: any) {

    this.apiservice.getinvoiceitemdetailsbyid(303).subscribe(
      (res: any) => {
        this.billingmaindetailsarr = res.data
        this.UpdateinvoiceitemForm.patchValue({
          itemId: res.data.itemId,
          discription: res.data.discription,
          itemFees: res.data.itemFees,
          discountRate: res.data.discountRate,
          discountAmount: res.data.discountAmount,
          taxRate: res.data.taxRate,
          taxAmount: res.data.taxAmount,
          itemTotal: res.data.itemTotal,
          assesmentYear: res.data.assesmentYear,
          type: res.data.type
        })
        console.log("dataaaatrnsaction*****************", res.data);
        console.log("dataaaatrnsactionIDDD*****************", res.data.discription);
        localStorage.setItem("transactionId", res.data.transactionId)

        // this.getproddetails = res.data ;

      },
      (error: any) => {
        console.error(error);
      }
    )

  }

  picFile(documentName: string) {
    // Constructing the document URL
    let url = `https://clientportal.promunim.com/send/getFile/${documentName}`;

    // Open the document in a new window/tab
    window.open(url);
  }

  // gettransactiondetails(accountno: any) {

  //   this.apiservice.gettransctiondetails(100210000001).subscribe(
  //     (res: any) => {
  //       this.billingmaindetailsarr = res.data
  //       //  console.log("dataaaatrnsaction*****************", res.data);
  //       //  console.log("dataaaatrnsactionIDDD*****************", res.data[0].transactionId);
  //       localStorage.setItem("transactionId", res.data.transactionId)

  //       // this.getproddetails = res.data ;

  //     },
  //     (error: any) => {
  //       console.error(error);
  //     }
  //   )

  // }

  savepayment() {
    console.log("SavePaymentDetail", this.addpaymentForm.value);
    this.apiservice.savepayment(this.addpaymentForm.value).subscribe(
      (response: any) => {
        //  console.log("AddVoucher",response.data);
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
    setInterval(() => { window.location.reload() }, 2000);

  }

  updatepayment() {
    console.log("uPDATEPaymentDetail", this.updatepaymentForm.value);
    this.apiservice.updatepayment(this.updatepaymentForm.value).subscribe(
      (response: any) => {
        //  console.log("AddVoucher",response.data);
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
  }

  gettransctiondetailsbyid(id: any) {
    this.apiservice.gettransctiondetailsbyid(303).subscribe(
      (res: any) => {
        this.billingmaindetailsarr = res.data
        this.updatepaymentForm.patchValue({
          amount: res.data.amount,
          transactionDate: res.data.transactionDate,
          discription: res.data.discription,
          paymentMode: res.data.paymentMode,
          paymentType: res.data.paymentType,
          paidAgainst: res.data.paidAgainst

        })
        console.log("dataaaatrnsaction*****************", res.data);
        console.log("dataaaatrnsactionIDDD*****************", res.data[0].transactionId);
        localStorage.setItem("transactionId", res.data.transactionId)

        // this.getproddetails = res.data ;

      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  deleteInvoiceItem(itemId: any) {
    const invoiceId = localStorage.getItem('invoiceIdtrans');
    const iddata = {
      itemId: itemId,
      invoiceId: invoiceId

    }
    console.log("data3***********", iddata);

    this.apiservice.deleteInvoiceItem(iddata).subscribe(
      (response: any) => {
        // console.log(response.data);
        Swal.fire({
          title: "Record Deleted!",
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
    )
  }

  deletepayment(transactionId: any) {
    // const transactionId = localStorage.getItem('transactionId');
    const invoiceId = localStorage.getItem('invoiceIdtrans');
    // console.log('ID :::::', localStorage.getItem('transactionId'));
    // console.log('ID :::::',transactionId);
    // console.log('ID 2:::::', localStorage.getItem('invoiceIdtrans'))
    const iddata = {
      transId: transactionId,
      invoiceId: invoiceId

    }
    // console.log("data3", iddata);

    this.apiservice.deletepayment(iddata).subscribe(
      (response: any) => {
        // console.log(response.data);
        // window.location.reload();
        Swal.fire({
          title: "Record Deleted!",
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
    )
  }

  shownewrole2() {
    this.showdata = false;
    this.showdata7 = true;
  }

  shownewrole3() {
    this.showdata = true;
    this.showdata7 = false;
  }







  // this.apiservice.deleteCustInteraction(followupId).subscribe(
  //   (response:any)=>{
  //     console.log(response.data);
  //     Swal.fire({
  //       title: "Record Deleted!",
  //       icon: "success"
  //     });
  //   },
  //   (error:any)=>{
  //     console.error(error);
  //     Swal.fire({
  //       title: "Error!",
  //       icon: "error"
  //     });
  //   }
  //   );
  //   setInterval(()=>{window.location.reload()},1000);

  //updateCustKyc
  updateCustKyc() {

    this.AddCustKYC = this.kycupdate.value;
    this.AddCustKYC.tid = this.id;
    // this.AddCustKYC.customerDocumentId =this.customerDocumentId ;
    console.log("update Cust Kyc ::::::: ", this.AddCustKYC, this.docImage);
    this.apiservice.saveCustKyc(this.AddCustKYC, this.docImage).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  editKyc(customerDocumentId: any) {
    this.customerDocumentId = customerDocumentId;
    console.log(" customer Document Category Id $$$$$$$$$$$$$$$$$$$$$$$$$$ ", this.customerDocumentId);
    this.apiservice.getByIdKYCDoc(this.customerDocumentId).subscribe(
      (response: any) => {
        this.getKycById = response.data[0];
        this.kycupdate.patchValue({
          customerDocumentType: response.data[0].customerDocumentType,
          customerDocumentCategoryId: response.data[0].customerDocumentCategoryId,
          customerdocumentId: response.data[0].customerDocumentId,
          description: response.data[0].description,
          tid: response.data[0].tid,
        })
        console.log("customer Document Category Id $$$$$ ", this.getKycById.customerDocumentCategoryId);
      },
      (error: any) => { console.error(error); }
    )
  }


  onchange(event: any) {
    // this.document = this.step4.get('customerDocumentCategoryId');
    // console.log(id);
    // console.log('DOCUMENT ID :::::::: ', this.id);
    const categoryId = event.target.value;
    if (categoryId !== '0') {
      this.apiservice.docType(categoryId).subscribe(

        (data: any) => {
          this.docType = data.docType;
          console.log('Responsiiiiiiiiii', data.docType);
        },
        (error: any) => { console.error(error); }
      )
    }
  }





  picfile() {
    if (this.signitury && this.signitury[0] && this.signitury[0].photo) {
      let filePath = localStorage.getItem('photoEmp');
      console.log('filePath :::::::: ', this.photoEmp1);
      let url = `https://clientportal.promunim.com/auth/getFile/${this.photoEmp1}`;
      // console.log('SONAAAAAAAAAAAA',url );
      const photoURL = `${`https://clientportal.promunim.com/auth/getFile`}/${this.photoEmp1}`;
      console.log("File URL: ", url);
      this.apiservice.getFile(this.photoEmp1).subscribe(
        (response: any) => {
          // this.signitury = response;
          window.open(response);
          console.log("File Response: ", response);
        },
        (error: any) => { console.error("File Error Response: ", error); }
      );
    } else {
      console.error("Invalid signitury data or photo path.");
    }
  }

  //saveVehicle
  addVehicle() {
    this.VehicleList = this.vehicle.value;
    this.VehicleList.accountNo = this.accountList.accountNo;
    console.log("Vehicle List::::::: ", this.vehicle, this.vehicledetails);
    this.apiservice.saveVehicle(this.VehicleList, this.vehicledetails).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }


  //addbankstatement
  AddBankStatement() {
    this.bankstatementList = this.addbankstatement.value;
    this.bankstatementList.accountNo = this.accountList.accountNo;
    console.log("AddBankStatement ::::::: ", this.addbankstatement.value, this.bankstatement);
    this.apiservice.saveBankStatement(this.bankstatementList, this.bankstatement).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  //saveBankDetails
  saveBankDetails() {
    this.bankdetailslist = this.savebankdetails.value;
    this.bankdetailslist.accountNo = this.accountList.accountNo;
    console.log("saveBankDetails ::::::: ", this.savebankdetails.value, this.bankdetails);
    this.apiservice.saveBankDetails(this.bankdetailslist, this.bankdetails).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  addSalesInvoice() {
    this.salesInvoiceList = this.addbankstatement.value;
    this.salesInvoiceList.accountNo = this.accountList.accountNo;
    console.log("sales invoiceList ::::::: ", this.salesInvoiceList, this.salesinvoice);
    this.apiservice.saveSalesInvoice(this.salesInvoiceList, this.salesinvoice).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  //PurchaseInvoice  
  addPurchaseInvoice() {
    this.salesInvoiceList = this.addbankstatement.value;
    this.salesInvoiceList.accountNo = this.accountList.accountNo;
    console.log("Purchase Invoice ::::::: ", this.salesInvoiceList, this.purchaseinvoice);
    this.apiservice.savePurchaseInvoice(this.salesInvoiceList, this.purchaseinvoice).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  //ExpensesDetails 
  addExpensesDetails() {
    this.salesInvoiceList = this.addbankstatement.value;
    this.salesInvoiceList.accountNo = this.accountList.accountNo;
    console.log("Purchase Invoice ::::::: ", this.salesInvoiceList, this.expense);
    this.apiservice.saveExpensesDetails(this.salesInvoiceList, this.expense).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  // addLoan
  addLoan() {
    this.AddLoanList = this.loan.value;
    this.AddLoanList.accountNo = this.accountList.accountNo;
    console.log("Loan List::::::: ", this.AddLoanList, this.loandetails);
    this.apiservice.saveLoan(this.AddLoanList, this.loandetails).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  //saveCheckBook
  addCheckBook() {
    this.salesInvoiceList = this.addbankstatement.value;
    this.salesInvoiceList.accountNo = this.accountList.accountNo;
    console.log("Check Book ::::::: ", this.salesInvoiceList, this.chequbookdetails);
    this.apiservice.saveCheckBook(this.salesInvoiceList, this.chequbookdetails).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }


  //savePaySlip
  addPaySlip() {
    this.salesInvoiceList = this.addbankstatement.value;
    this.salesInvoiceList.accountNo = this.accountList.accountNo;
    console.log("Pay Slip ::::::: ", this.salesInvoiceList, this.payslipdetails);
    this.apiservice.savePaySlip(this.salesInvoiceList, this.payslipdetails).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  //saveInvestment
  addInvestment() {
    this.InvestmentList = this.investment.value;
    this.InvestmentList.accountNo = this.accountList.accountNo;
    console.log("Investment::::::: ", this.InvestmentList, this.investmentdetails);
    this.apiservice.saveInvestment(this.InvestmentList, this.investmentdetails).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  // addLoan
  addTax() {
    this.TaxList = this.tax.value;
    this.TaxList.accountNo = this.accountList.accountNo;
    console.log("Tax List::::::: ", this.TaxList, this.taxdetails);
    this.apiservice.saveTaxes(this.TaxList, this.taxdetails).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  onsubmit4() {
    this.AddCustKYC = this.step4.value;
    this.AddCustKYC.tid = this.id;
    console.log("AOF4 ::::::: ", this.step4.value, this.docImage);
    this.apiservice.aof4Form(this.AddCustKYC, this.docImage).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }

  updateCompliances(compliance: string, event: any) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.occupationIncomeList.compliances.push(compliance);
    } else {
      const index = this.occupationIncomeList.compliances.indexOf(compliance);
      if (index !== -1) {
        this.occupationIncomeList.compliances.splice(index, 1);
      }
    }
    console.log(this.occupationIncomeList.compliances); // Optional: log the array for debugging
  }
  updateOccupationIncome() {
    this.occupationIncomeList = this.updateoccupationincome.value;
    console.log("Occupation Income ******************** ::::::: ", this.occupationIncomeList);
    this.apiservice.updateOccupationIncome(this.updateoccupationincome.value).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("Not Working", error);
      }
    )
  }


  //AccountWriting
  addAccountWriting() {
    this.AccountWritingList = this.accountwriting.value;
    this.AccountWritingList.accountNo = this.accountList.accountNo;
    console.log("Account Writing ::::::: ", this.AccountWritingList, this.accDocumentImage);
    this.apiservice.saveAccWriting(this.AccountWritingList, this.accDocumentImage).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
      },
      (error: any) => {
        console.error("not working", error);
      }
    )
  }
  getAccWritingById(id: any) {
    this.idforaccwritingupdate = id;
    localStorage.setItem('idforaccwritingupdate1', this.idforaccwritingupdate);
    this.acWritingByIdList.id = localStorage.getItem("accWritingId");
    // console.log("#######################",this.acWritingByIdList.id);
    console.log("#######################this.idforaccwritingupdate", this.idforaccwritingupdate);
    this.apiservice.getAccWritingById(this.idforaccwritingupdate).subscribe(
      (response: any) => {
        this.acWritingByIdList = response.data;
        // console.log("accWriting", response.data);
      },
      (error: any) => { console.error(error); }
    )
  }

  updateaccwritting() {
    this.occupationIncomeList = this.updateaccountwriting.value;
    console.log("Update AccWriting ******************** ::::::: ", this.occupationIncomeList, this.accDocumentImage);
    this.apiservice.updateAccWritting(this.updateaccountwriting.value, this.accDocumentImage).subscribe(
      (response: any) => {
        console.log('SAVE', response.status);
        Swal.fire({
          title: "Record Updated!",
          icon: "success"
        });
        // console.log('update authorisation,,,,,,', response.data);
      }, (error: any) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          icon: "error"
        });
      }
    )
  }

  // this.AccountOverview = !this.AccountOverview;

  accountOverview() {
    this.AccountOverview = !this.AccountOverview;
    this.SalesReport = false;
    this.PurchaseReport = false;
    this.StokeStatement = false;
    this.DebtorsCreditors = false;
    this.ExpenseReports = false;
    this.TurnoverReport = false;
    this.SuspenseReport = false;
    this.FinalStatement = false;
    this.ProjectReport = false;
    this.PISReport = false;
  }

  salesReport() {
    this.AccountOverview = false;
    this.SalesReport = !this.SalesReport;
    this.PurchaseReport = false;
    this.StokeStatement = false;
    this.DebtorsCreditors = false;
    this.ExpenseReports = false;
    this.TurnoverReport = false;
    this.SuspenseReport = false;
    this.FinalStatement = false;
    this.ProjectReport = false;
    this.PISReport = false;
  }

  purchaseReport() {
    this.AccountOverview = false;
    this.SalesReport = false;
    this.PurchaseReport = !this.PurchaseReport;
    this.StokeStatement = false;
    this.DebtorsCreditors = false;
    this.ExpenseReports = false;
    this.TurnoverReport = false;
    this.SuspenseReport = false;
    this.FinalStatement = false;
    this.ProjectReport = false;
    this.PISReport = false;
  }

  stokeStatement() {
    this.AccountOverview = false;
    this.SalesReport = false;
    this.PurchaseReport = false;
    this.StokeStatement = !this.StokeStatement;
    this.DebtorsCreditors = false;
    this.ExpenseReports = false;
    this.TurnoverReport = false;
    this.SuspenseReport = false;
    this.FinalStatement = false;
    this.ProjectReport = false;
    this.PISReport = false;
  }

  debtorsCreditors() {
    this.AccountOverview = false;
    this.SalesReport = false;
    this.PurchaseReport = false;
    this.StokeStatement = false;
    this.DebtorsCreditors = !this.DebtorsCreditors;
    this.ExpenseReports = false;
    this.TurnoverReport = false;
    this.SuspenseReport = false;
    this.FinalStatement = false;
    this.ProjectReport = false;
    this.PISReport = false;
  }

  expenseReports() {
    this.AccountOverview = false;
    this.SalesReport = false;
    this.PurchaseReport = false;
    this.StokeStatement = false;
    this.DebtorsCreditors = false;
    this.ExpenseReports = !this.ExpenseReports;
    this.TurnoverReport = false;
    this.SuspenseReport = false;
    this.FinalStatement = false;
    this.ProjectReport = false;
    this.PISReport = false;
  }

  turnoverReport() {
    this.AccountOverview = false;
    this.SalesReport = false;
    this.PurchaseReport = false;
    this.StokeStatement = false;
    this.DebtorsCreditors = false;
    this.ExpenseReports = false;
    this.TurnoverReport = !this.TurnoverReport;
    this.SuspenseReport = false;
    this.FinalStatement = false;
    this.ProjectReport = false;
    this.PISReport = false;
  }

  suspenseReport() {
    this.AccountOverview = false;
    this.SalesReport = false;
    this.PurchaseReport = false;
    this.StokeStatement = false;
    this.DebtorsCreditors = false;
    this.ExpenseReports = false;
    this.TurnoverReport = false;
    this.SuspenseReport = !this.SuspenseReport;
    this.FinalStatement = false;
    this.ProjectReport = false;
    this.PISReport = false;
  }

  finalStatement() {
    this.AccountOverview = false;
    this.SalesReport = false;
    this.PurchaseReport = false;
    this.StokeStatement = false;
    this.DebtorsCreditors = false;
    this.ExpenseReports = false;
    this.TurnoverReport = false;
    this.SuspenseReport = false;
    this.FinalStatement = !this.FinalStatement;
    this.ProjectReport = false;
    this.PISReport = false;
  }

  projectReport() {
    this.AccountOverview = false;
    this.SalesReport = false;
    this.PurchaseReport = false;
    this.StokeStatement = false;
    this.DebtorsCreditors = false;
    this.ExpenseReports = false;
    this.TurnoverReport = false;
    this.SuspenseReport = false;
    this.FinalStatement = false;
    this.ProjectReport = !this.ProjectReport;
    this.PISReport = false;
  }

  pISReport() {
    this.AccountOverview = false;
    this.SalesReport = false;
    this.PurchaseReport = false;
    this.StokeStatement = false;
    this.DebtorsCreditors = false;
    this.ExpenseReports = false;
    this.TurnoverReport = false;
    this.SuspenseReport = false;
    this.FinalStatement = false;
    this.ProjectReport = false;
    this.PISReport = !this.PISReport;
  }





  //Taxes  
  guidelines() {
    this.Guidelines = !this.Guidelines;
    this.StatementofIncomet = false;
    this.AdvanceTax = false;
    this.AnnualTaxStatement = false;
    this.ITReturnss = false;
    this.IncomeTaxAudits = false;
    this.Refundt = false;
    this.Notices = false;
    this.TaxPaidChallan = false;

  }

  statementofIncomet() {
    this.Guidelines = false;
    this.StatementofIncomet = !this.StatementofIncomet;
    this.AdvanceTax = false;
    this.AnnualTaxStatement = false;
    this.ITReturnss = false;
    this.IncomeTaxAudits = false;
    this.Refundt = false;
    this.Notices = false;
    this.TaxPaidChallan = false;
  }

  advanceTax() {
    this.Guidelines = false;
    this.StatementofIncomet = false;
    this.AdvanceTax = !this.AdvanceTax;
    this.AnnualTaxStatement = false;
    this.ITReturnss = false;
    this.IncomeTaxAudits = false;
    this.Refundt = false;
    this.Notices = false;
    this.TaxPaidChallan = false;
  }

  annualTaxStatement() {
    this.Guidelines = false;
    this.StatementofIncomet = false;
    this.AdvanceTax = false;
    this.AnnualTaxStatement = !this.AnnualTaxStatement;
    this.ITReturnss = false;
    this.IncomeTaxAudits = false;
    this.Refundt = false;
    this.Notices = false;
    this.TaxPaidChallan = false;
  }

  iTReturnss() {
    this.Guidelines = false;
    this.StatementofIncomet = false;
    this.AdvanceTax = false;
    this.AnnualTaxStatement = false;
    this.ITReturnss = !this.ITReturnss;
    this.IncomeTaxAudits = false;
    this.Refundt = false;
    this.Notices = false;
    this.TaxPaidChallan = false;
  }

  incomeTaxAudits() {
    this.Guidelines = false;
    this.StatementofIncomet = false;
    this.AdvanceTax = false;
    this.AnnualTaxStatement = false;
    this.ITReturnss = false;
    this.IncomeTaxAudits = !this.IncomeTaxAudits;
    this.Refundt = false;
    this.Notices = false;
    this.TaxPaidChallan = false;
  }

  refundt() {
    this.Guidelines = false;
    this.StatementofIncomet = false;
    this.AdvanceTax = false;
    this.AnnualTaxStatement = false;
    this.ITReturnss = false;
    this.IncomeTaxAudits = false;
    this.Refundt = !this.Refundt;
    this.Notices = false;
    this.TaxPaidChallan = false;
  }

  notices() {
    this.Guidelines = false;
    this.StatementofIncomet = false;
    this.AdvanceTax = false;
    this.AnnualTaxStatement = false;
    this.ITReturnss = false;
    this.IncomeTaxAudits = false;
    this.Refundt = false;
    this.Notices = !this.Notices;
    this.TaxPaidChallan = false;
  }

  taxPaidChallan() {
    this.Guidelines = false;
    this.StatementofIncomet = false;
    this.AdvanceTax = false;
    this.AnnualTaxStatement = false;
    this.ITReturnss = false;
    this.IncomeTaxAudits = false;
    this.Refundt = false;
    this.Notices = false;
    this.TaxPaidChallan = !this.TaxPaidChallan;
  }

  //GSTRegular

  guidlines1() {

    this.Guidlines1 = !this.Guidlines1;
    this.GSTRegistration = false;
    this.E_WayBills = false;
    this.GSTWorking = false;
    this.GSTR2A_2BReport = false;
    this.ITCReport = false;
    this.RCMReport = false;
    this.GSTR1 = false;
    this.GSTR3B = false;
    this.GSTAudit = false;
    this.GSTRegularAudit = false;
    this.GSTR10 = false;
    this.GSTRegularNotices = false;
  }

  gstRegistration() {
    // this.GSTRegistration = !this.GSTRegistration;
    this.Guidlines1 = false;
    this.GSTRegistration = !this.GSTRegistration;
    this.E_WayBills = false;
    this.GSTWorking = false;
    this.GSTR2A_2BReport = false;
    this.ITCReport = false;
    this.RCMReport = false;
    this.GSTR1 = false;
    this.GSTR3B = false;
    this.GSTAudit = false;
    this.GSTRegularAudit = false;
    this.GSTR10 = false;
    this.GSTRegularNotices = false;

  }

  e_WayBills() {
    this.Guidlines1 = false;
    this.GSTRegistration = false;
    this.E_WayBills = !this.E_WayBills;
    this.GSTWorking = false;
    this.GSTR2A_2BReport = false;
    this.ITCReport = false;
    this.RCMReport = false;
    this.GSTR1 = false;
    this.GSTR3B = false;
    this.GSTAudit = false;
    this.GSTRegularAudit = false;
    this.GSTR10 = false;
    this.GSTRegularNotices = false;
  }


  gSTWorking() {
    this.Guidlines1 = false;
    this.GSTRegistration = false;
    this.E_WayBills = false;
    this.GSTWorking = !this.GSTWorking;
    this.GSTR2A_2BReport = false;
    this.ITCReport = false;
    this.RCMReport = false;
    this.GSTR1 = false;
    this.GSTR3B = false;
    this.GSTAudit = false;
    this.GSTRegularAudit = false;
    this.GSTR10 = false;
    this.GSTRegularNotices = false;
  }


  gSTR2A_2BReport() {
    this.Guidlines1 = false;
    this.GSTRegistration = false;
    this.E_WayBills = false;
    this.GSTWorking = false;
    this.GSTR2A_2BReport = !this.GSTR2A_2BReport;
    this.ITCReport = false;
    this.RCMReport = false;
    this.GSTR1 = false;
    this.GSTR3B = false;
    this.GSTAudit = false;
    this.GSTRegularAudit = false;
    this.GSTR10 = false;
    this.GSTRegularNotices = false;
  }


  iTCReport() {
    this.Guidlines1 = false;
    this.GSTRegistration = false;
    this.E_WayBills = false;
    this.GSTWorking = false;
    this.GSTR2A_2BReport = false;
    this.ITCReport = !this.ITCReport;
    this.RCMReport = false;
    this.GSTR1 = false;
    this.GSTR3B = false;
    this.GSTAudit = false;
    this.GSTRegularAudit = false;
    this.GSTR10 = false;
    this.GSTRegularNotices = false;
  }


  rCMReport() {
    this.Guidlines1 = false;
    this.GSTRegistration = false;
    this.E_WayBills = false;
    this.GSTWorking = false;
    this.GSTR2A_2BReport = false;
    this.ITCReport = false;
    this.RCMReport = !this.RCMReport;
    this.GSTR1 = false;
    this.GSTR3B = false;
    this.GSTAudit = false;
    this.GSTRegularAudit = false;
    this.GSTR10 = false;
    this.GSTRegularNotices = false;
  }


  gSTR1() {
    this.Guidlines1 = false;
    this.GSTRegistration = false;
    this.E_WayBills = false;
    this.GSTWorking = false;
    this.GSTR2A_2BReport = false;
    this.ITCReport = false;
    this.RCMReport = false;
    this.GSTR1 = !this.GSTR1;
    this.GSTR3B = false;
    this.GSTAudit = false;
    this.GSTRegularAudit = false;
    this.GSTR10 = false;
    this.GSTRegularNotices = false;
  }


  gSTR3B() {
    this.Guidlines1 = false;
    this.GSTRegistration = false;
    this.E_WayBills = false;
    this.GSTWorking = false;
    this.GSTR2A_2BReport = false;
    this.ITCReport = false;
    this.RCMReport = false;
    this.GSTR1 = false;
    this.GSTR3B = !this.GSTR3B;
    this.GSTAudit = false;
    this.GSTRegularAudit = false;
    this.GSTR10 = false;
    this.GSTRegularNotices = false;
  }


  gSTAudit() {
    this.Guidlines1 = false;
    this.GSTRegistration = false;
    this.E_WayBills = false;
    this.GSTWorking = false;
    this.GSTR2A_2BReport = false;
    this.ITCReport = false;
    this.RCMReport = false;
    this.GSTR1 = false;
    this.GSTR3B = false;
    this.GSTAudit = !this.GSTAudit;
    this.GSTRegularAudit = false;
    this.GSTR10 = false;
    this.GSTRegularNotices = false;
  }


  gSTRegularAudit() {
    this.Guidlines1 = false;
    this.GSTRegistration = false;
    this.E_WayBills = false;
    this.GSTWorking = false;
    this.GSTR2A_2BReport = false;
    this.ITCReport = false;
    this.RCMReport = false;
    this.GSTR1 = false;
    this.GSTR3B = false;
    this.GSTAudit = false;
    this.GSTRegularAudit = !this.GSTRegularAudit;
    this.GSTR10 = false;
    this.GSTRegularNotices = false;
  }



  gSTR10() {
    this.Guidlines1 = false;
    this.GSTRegistration = false;
    this.E_WayBills = false;
    this.GSTWorking = false;
    this.GSTR2A_2BReport = false;
    this.ITCReport = false;
    this.RCMReport = false;
    this.GSTR1 = false;
    this.GSTR3B = false;
    this.GSTAudit = false;
    this.GSTRegularAudit = false;
    this.GSTR10 = !this.GSTR10;
    this.GSTRegularNotices = false;
  }


  gSTRegularNotices() {
    this.Guidlines1 = false;
    this.GSTRegistration = false;
    this.E_WayBills = false;
    this.GSTWorking = false;
    this.GSTR2A_2BReport = false;
    this.ITCReport = false;
    this.RCMReport = false;
    this.GSTR1 = false;
    this.GSTR3B = false;
    this.GSTAudit = false;
    this.GSTRegularAudit = false;
    this.GSTR10 = false;
    this.GSTRegularNotices = !this.GSTRegularNotices;
  }


  //GST Composition

  guidlines2() {
    this.Guidlines2 = !this.Guidlines2;
    this.GSTRegistrationForm = false;
    this.GSTWorking1 = false;
    this.GSTRCMP08 = false;
    this.GSTR4 = false;
    this.TaxPaymentChallans = false;
    this.GSTCompositionNotices = false;
  }

  gSTRegistrationForm() {
    this.Guidlines2 = false;
    this.GSTRegistrationForm = !this.GSTRegistrationForm;
    this.GSTWorking1 = false;
    this.GSTRCMP08 = false;
    this.GSTR4 = false;
    this.TaxPaymentChallans = false;
    this.GSTCompositionNotices = false;
  }

  gSTWorking1() {
    this.Guidlines2 = false;
    this.GSTRegistrationForm = false;
    this.GSTWorking1 = !this.GSTWorking1;
    this.GSTRCMP08 = false;
    this.GSTR4 = false;
    this.TaxPaymentChallans = false;
    this.GSTCompositionNotices = false;
  }

  gSTRCMP08() {
    this.Guidlines2 = false;
    this.GSTRegistrationForm = false;
    this.GSTWorking1 = false;
    this.GSTRCMP08 = !this.GSTRCMP08;
    this.GSTR4 = false;
    this.TaxPaymentChallans = false;
    this.GSTCompositionNotices = false;
  }

  gSTR4() {
    this.Guidlines2 = false;
    this.GSTRegistrationForm = false;
    this.GSTWorking1 = false;
    this.GSTRCMP08 = false;
    this.GSTR4 = !this.GSTR4;
    this.TaxPaymentChallans = false;
    this.GSTCompositionNotices = false;
  }

  taxPaymentChallans() {
    this.Guidlines2 = false;
    this.GSTRegistrationForm = false;
    this.GSTWorking1 = false;
    this.GSTRCMP08 = false;
    this.GSTR4 = false;
    this.TaxPaymentChallans = !this.TaxPaymentChallans;
    this.GSTCompositionNotices = false;
  }

  gSTCompositionNotices() {
    this.Guidlines2 = false;
    this.GSTRegistrationForm = false;
    this.GSTWorking1 = false;
    this.GSTRCMP08 = false;
    this.GSTR4 = false;
    this.TaxPaymentChallans = false;
    this.GSTCompositionNotices = !this.GSTCompositionNotices;
  }



  //GST CompositTax Deducted at Source (TDS)
  guidlines3() {
    this.Guidlines3 = !this.Guidlines3;
    this.TANRegistration = false;
    this.TDSWorking = false;
    this.TDSPaymentChallan = false;
    this.TDSFiling = false;
    this.TDSCertificate = false;
  }
  tANRegistration() {
    this.Guidlines3 = false;
    this.TANRegistration = !this.TANRegistration;
    this.TDSWorking = false;
    this.TDSPaymentChallan = false;
    this.TDSFiling = false;
    this.TDSCertificate = false;
  }

  tDSWorking() {
    this.Guidlines3 = false;
    this.TANRegistration = false;
    this.TDSWorking = !this.TDSWorking;
    this.TDSPaymentChallan = false;
    this.TDSFiling = false;
    this.TDSCertificate = false;
  }

  tDSPaymentChallan() {
    this.Guidlines3 = false;
    this.TANRegistration = false;
    this.TDSWorking = false;
    this.TDSPaymentChallan = !this.TDSPaymentChallan;
    this.TDSFiling = false;
    this.TDSCertificate = false;
  }

  tDSFiling() {
    this.Guidlines3 = false;
    this.TANRegistration = false;
    this.TDSWorking = false;
    this.TDSPaymentChallan = false;
    this.TDSFiling = !this.TDSFiling;
    this.TDSCertificate = false;
  }

  tDSCertificate() {
    this.Guidlines3 = false;
    this.TANRegistration = false;
    this.TDSWorking = false;
    this.TDSPaymentChallan = false;
    this.TDSFiling = false;
    this.TDSCertificate = !this.TDSCertificate;
  }

  //Tax Collected at Source (TCS)

  guidlines4() {
    this.Guidlines4 = !this.Guidlines4;
    this.TCSWorking = false;
    this.TCSPaymentChallan = false;
    this.TCSFiling = false;
    this.TCSCertificate = false;
  }

  tCSWorking() {
    this.Guidlines4 = false;
    this.TCSWorking = !this.TCSWorking;
    this.TCSPaymentChallan = false;
    this.TCSFiling = false;
    this.TCSCertificate = false;
  }

  tCSPaymentChallan() {
    this.Guidlines4 = false;
    this.TCSWorking = false;
    this.TCSPaymentChallan = !this.TCSPaymentChallan;
    this.TCSFiling = false;
    this.TCSCertificate = false;
  }

  tCSFiling() {
    this.Guidlines4 = false;
    this.TCSWorking = false;
    this.TCSPaymentChallan = false;
    this.TCSFiling = !this.TCSFiling;
    this.TCSCertificate = false;
  }

  tCSCertificate() {
    this.Guidlines4 = false;
    this.TCSWorking = false;
    this.TCSPaymentChallan = false;
    this.TCSFiling = false;
    this.TCSCertificate = !this.TCSCertificate;
  }



  //Tax Collected at Source (TCS)


  guidlines5() {
    this.Guidlines5 = !this.Guidlines5;
    this.Registration = false;
    this.PTECChallan = false;
    this.PTECPaymentChallan = false;
  }

  registration() {
    this.Guidlines5 = false;
    this.Registration = !this.Registration;
    this.PTECChallan = false;
    this.PTECPaymentChallan = false;
  }


  pTECChallan() {
    this.Guidlines5 = false;
    this.Registration = false;
    this.PTECChallan = !this.PTECChallan;
    this.PTECPaymentChallan = false;
  }


  pTECPaymentChallan() {
    this.Guidlines5 = false;
    this.Registration = false;
    this.PTECChallan = false;
    this.PTECPaymentChallan = !this.PTECPaymentChallan;
  }

  //Professional Tax Registration Certificate (PTRC)  
  guidlines6() {
    this.Guidlines6 = !this.Guidlines6;
    this.Registration1 = false;
    this.PTRCWorking = false;
    this.PTRCChallan = false;
    this.PTRCPaymentChallan = false;
  }

  registration1() {
    this.Guidlines6 = false;
    this.Registration1 = !this.Registration1;
    this.PTRCWorking = false;
    this.PTRCChallan = false;
    this.PTRCPaymentChallan = false;
  }

  pTRCWorking() {
    this.Guidlines6 = false;
    this.Registration1 = false;
    this.PTRCWorking = !this.PTRCWorking;
    this.PTRCChallan = false;
    this.PTRCPaymentChallan = false;
  }

  pTRCChallan() {
    this.Guidlines6 = false;
    this.Registration1 = false;
    this.PTRCWorking = false;
    this.PTRCChallan = !this.PTRCChallan;
    this.PTRCPaymentChallan = false;
  }


  pTECPaymentChallan1() {
    this.Guidlines6 = false;
    this.Registration1 = false;
    this.PTRCWorking = false;
    this.PTRCChallan = false;
    this.PTRCPaymentChallan = !this.PTRCPaymentChallan;
  }


  //Audits
  guidlines7() {
    this.Guidlines7 = !this.Guidlines7;
    this.InternalAudits = false;
    this.FinancialAudits = false;
    this.ComplianceAudits = false;
    this.StockAudit = false;
    this.IncomeTaxAudit = false;
    this.GSTAudit1 = false;
    this.Others = false;
  }

  internalAudits() {
    this.Guidlines7 = false;
    this.InternalAudits = !this.InternalAudits;
    this.FinancialAudits = false;
    this.ComplianceAudits = false;
    this.StockAudit = false;
    this.IncomeTaxAudit = false;
    this.GSTAudit1 = false;
    this.Others = false;
  }

  financialAudits() {
    this.Guidlines7 = false;
    this.InternalAudits = false;
    this.FinancialAudits = !this.FinancialAudits;
    this.ComplianceAudits = false;
    this.StockAudit = false;
    this.IncomeTaxAudit = false;
    this.GSTAudit1 = false;
    this.Others = false;
  }

  complianceAudits() {
    this.Guidlines7 = false;
    this.InternalAudits = false;
    this.FinancialAudits = false;
    this.ComplianceAudits = !this.ComplianceAudits;
    this.StockAudit = false;
    this.IncomeTaxAudit = false;
    this.GSTAudit1 = false;
    this.Others = false;
  }

  stockAudit() {
    this.Guidlines7 = false;
    this.InternalAudits = false;
    this.FinancialAudits = false;
    this.ComplianceAudits = false;
    this.StockAudit = !this.StockAudit;
    this.IncomeTaxAudit = false;
    this.GSTAudit1 = false;
    this.Others = false;
  }

  incomeTaxAudit() {
    this.Guidlines7 = false;
    this.InternalAudits = false;
    this.FinancialAudits = false;
    this.ComplianceAudits = false;
    this.StockAudit = false;
    this.IncomeTaxAudit = !this.IncomeTaxAudit;
    this.GSTAudit1 = false;
    this.Others = false;
  }

  gSTAudit1() {
    this.Guidlines7 = false;
    this.InternalAudits = false;
    this.FinancialAudits = false;
    this.ComplianceAudits = false;
    this.StockAudit = false;
    this.IncomeTaxAudit = false;
    this.GSTAudit1 = !this.GSTAudit1;
    this.Others = false;
  }

  others() {
    this.Guidlines7 = false;
    this.InternalAudits = false;
    this.FinancialAudits = false;
    this.ComplianceAudits = false;
    this.StockAudit = false;
    this.IncomeTaxAudit = false;
    this.GSTAudit1 = false;
    this.Others = !this.Others;
  }

//Business Registration
// ProprietorshipRegistration: boolean = false;
// PartnershipRegistration: boolean = false;
// CompanyRegistration: boolean = false;
// TrustAssociation: boolean = false;
// HUFRegistration: boolean = false;


proprietorshipRegistration() {
  this.ProprietorshipRegistration = ! this.ProprietorshipRegistration;
  this.PartnershipRegistration = false;
  this.CompanyRegistration = false;
  this.TrustAssociation = false;
  this.HUFRegistration = false;
}


partnershipRegistration() {
  this.ProprietorshipRegistration = false;
  this.PartnershipRegistration = ! this.PartnershipRegistration;
  this.CompanyRegistration = false;
  this.TrustAssociation = false;
  this.HUFRegistration = false;
}

companyRegistration() {
  this.ProprietorshipRegistration = false;
  this.PartnershipRegistration = false;
  this.CompanyRegistration = ! this.CompanyRegistration;
  this.TrustAssociation = false;
  this.HUFRegistration = false;
}

trustAssociation() {
  this.ProprietorshipRegistration = false;
  this.PartnershipRegistration = false;
  this.CompanyRegistration = false;
  this.TrustAssociation = ! this.TrustAssociation;
  this.HUFRegistration = false;
}

hUFRegistration() {
  this.ProprietorshipRegistration = false;
  this.PartnershipRegistration = false;
  this.CompanyRegistration = false;
  this.TrustAssociation = false;
  this.HUFRegistration = ! this.HUFRegistration;
}


  //Loan Service Request
  freeCreditScore() {
    this.FreeCreditScore = !this.FreeCreditScore;
    this.NewHomeLoan = false;
    this.LoanAgainstProperty = false;
    this.BusinessLoan = false;
    this.HomeLoan = false;
    this.CashCredit = false;
    this.LoanAgainstSecurity = false;
    this.GoldLoan = false;
    this.CarLoan = false;
    this.CommercialVehicleLoan = false;
    this.InfrastructureFinanceLoan = false;
    this.EMICalculatorHomeLoan = false;
    this.EligibilityCalculatorHomeLoan = false;
    this.MicroLoanUnder = false;
    this.TransferHomeLoan = false;
    this.TransferBusinessLoan = false;
    this.OverDraft = false;
    
  }


  newHomeLoan() {
    this.FreeCreditScore = false;
    this.NewHomeLoan = !this.NewHomeLoan;
    this.LoanAgainstProperty = false;
    this.BusinessLoan = false;
    this.HomeLoan = false;
    this.CashCredit = false;
    this.LoanAgainstSecurity = false;
    this.GoldLoan = false;
    this.CarLoan = false;
    this.CommercialVehicleLoan = false;
    this.InfrastructureFinanceLoan = false;
    this.EMICalculatorHomeLoan = false;
    this.EligibilityCalculatorHomeLoan = false;
    this.MicroLoanUnder = false;
    this.TransferHomeLoan = false;
    this.TransferBusinessLoan = false;
    this.OverDraft = false;
    
  }  
  
  loanAgainstProperty() {
    this.FreeCreditScore = false;
    this.NewHomeLoan = false;
    this.LoanAgainstProperty = !this.LoanAgainstProperty;
    this.BusinessLoan = false;
    this.HomeLoan = false;
    this.CashCredit = false;
    this.LoanAgainstSecurity = false;
    this.GoldLoan = false;
    this.CarLoan = false;
    this.CommercialVehicleLoan = false;
    this.InfrastructureFinanceLoan = false;
    this.EMICalculatorHomeLoan = false;
    this.EligibilityCalculatorHomeLoan = false;
    this.MicroLoanUnder = false;
    this.TransferHomeLoan = false;
    this.TransferBusinessLoan = false;
    this.OverDraft = false;
    
  } 
  
  businessLoan() {
    this.FreeCreditScore = false;
    this.NewHomeLoan = false;
    this.LoanAgainstProperty = false;
    this.BusinessLoan = !this.BusinessLoan;
    this.HomeLoan = false;
    this.CashCredit = false;
    this.LoanAgainstSecurity = false;
    this.GoldLoan = false;
    this.CarLoan = false;
    this.CommercialVehicleLoan = false;
    this.InfrastructureFinanceLoan = false;
    this.EMICalculatorHomeLoan = false;
    this.EligibilityCalculatorHomeLoan = false;
    this.MicroLoanUnder = false;
    this.TransferHomeLoan = false;
    this.TransferBusinessLoan = false;
    this.OverDraft = false;
    
  }


  homeLoan() {
    this.FreeCreditScore = false;
    this.NewHomeLoan = false;
    this.LoanAgainstProperty = false;
    this.BusinessLoan = false;
    this.HomeLoan = !this.HomeLoan;
    this.CashCredit = false;
    this.LoanAgainstSecurity = false;
    this.GoldLoan = false;
    this.CarLoan = false;
    this.CommercialVehicleLoan = false;
    this.InfrastructureFinanceLoan = false;
    this.EMICalculatorHomeLoan = false;
    this.EligibilityCalculatorHomeLoan = false;
    this.MicroLoanUnder = false;
    this.TransferHomeLoan = false;
    this.TransferBusinessLoan = false;
    this.OverDraft = false;
    
  }


  cashCredit() {
    this.FreeCreditScore = false;
    this.NewHomeLoan = false;
    this.LoanAgainstProperty = false;
    this.BusinessLoan = false;
    this.HomeLoan = false;
    this.CashCredit = !this.CashCredit;
    this.LoanAgainstSecurity = false;
    this.GoldLoan = false;
    this.CarLoan = false;
    this.CommercialVehicleLoan = false;
    this.InfrastructureFinanceLoan = false;
    this.EMICalculatorHomeLoan = false;
    this.EligibilityCalculatorHomeLoan = false;
    this.MicroLoanUnder = false;
    this.TransferHomeLoan = false;
    this.TransferBusinessLoan = false;
    this.OverDraft = false;
    
  }  
  
  loanAgainstSecurity() {
    this.FreeCreditScore = false;
    this.NewHomeLoan = false;
    this.LoanAgainstProperty = false;
    this.BusinessLoan = false;
    this.HomeLoan = false;
    this.CashCredit = false;
    this.LoanAgainstSecurity = !this.LoanAgainstSecurity;
    this.GoldLoan = false;
    this.CarLoan = false;
    this.CommercialVehicleLoan = false;
    this.InfrastructureFinanceLoan = false;
    this.EMICalculatorHomeLoan = false;
    this.EligibilityCalculatorHomeLoan = false;
    this.MicroLoanUnder = false;
    this.TransferHomeLoan = false;
    this.TransferBusinessLoan = false;
    this.OverDraft = false;
    
  } 
  
  goldLoan() {
    this.FreeCreditScore = false;
    this.NewHomeLoan = false;
    this.LoanAgainstProperty = false;
    this.BusinessLoan = false;
    this.HomeLoan = false;
    this.CashCredit = false;
    this.LoanAgainstSecurity = false;
    this.GoldLoan = !this.GoldLoan;
    this.CarLoan = false;
    this.CommercialVehicleLoan = false;
    this.InfrastructureFinanceLoan = false;
    this.EMICalculatorHomeLoan = false;
    this.EligibilityCalculatorHomeLoan = false;
    this.MicroLoanUnder = false;
    this.TransferHomeLoan = false;
    this.TransferBusinessLoan = false;
    this.OverDraft = false;
    
  }


    
  carLoan() {
    this.FreeCreditScore = false;
    this.NewHomeLoan = false;
    this.LoanAgainstProperty = false;
    this.BusinessLoan = false;
    this.HomeLoan = false;
    this.CashCredit = false;
    this.LoanAgainstSecurity = false;
    this.GoldLoan = false;
    this.CarLoan = !this.CarLoan;
    this.CommercialVehicleLoan = false;
    this.InfrastructureFinanceLoan = false;
    this.EMICalculatorHomeLoan = false;
    this.EligibilityCalculatorHomeLoan = false;
    this.MicroLoanUnder = false;
    this.TransferHomeLoan = false;
    this.TransferBusinessLoan = false;
    this.OverDraft = false;
    
  }


  commercialVehicleLoan() {
    this.FreeCreditScore = false;
    this.NewHomeLoan = false;
    this.LoanAgainstProperty = false;
    this.BusinessLoan = false;
    this.HomeLoan = false;
    this.CashCredit = false;
    this.LoanAgainstSecurity = false;
    this.GoldLoan = false;
    this.CarLoan = false;
    this.CommercialVehicleLoan = !this.CommercialVehicleLoan;
    this.InfrastructureFinanceLoan = false;
    this.EMICalculatorHomeLoan = false;
    this.EligibilityCalculatorHomeLoan = false;
    this.MicroLoanUnder = false;
    this.TransferHomeLoan = false;
    this.TransferBusinessLoan = false;
    this.OverDraft = false;
    
  }


  infrastructureFinanceLoan() {
    this.FreeCreditScore = false;
    this.NewHomeLoan = false;
    this.LoanAgainstProperty = false;
    this.BusinessLoan = false;
    this.HomeLoan = false;
    this.CashCredit = false;
    this.LoanAgainstSecurity = false;
    this.GoldLoan = false;
    this.CarLoan = false;
    this.CommercialVehicleLoan = false;
    this.InfrastructureFinanceLoan = !this.InfrastructureFinanceLoan;
    this.EMICalculatorHomeLoan = false;
    this.EligibilityCalculatorHomeLoan = false;
    this.MicroLoanUnder = false;
    this.TransferHomeLoan = false;
    this.TransferBusinessLoan = false;
    this.OverDraft = false;
    
  }  
  
  eMICalculatorHomeLoan() {
    this.FreeCreditScore = false;
    this.NewHomeLoan = false;
    this.LoanAgainstProperty = false;
    this.BusinessLoan = false;
    this.HomeLoan = false;
    this.CashCredit = false;
    this.LoanAgainstSecurity = false;
    this.GoldLoan = false;
    this.CarLoan = false;
    this.CommercialVehicleLoan = false;
    this.InfrastructureFinanceLoan = false;
    this.EMICalculatorHomeLoan = !this.EMICalculatorHomeLoan;
    this.EligibilityCalculatorHomeLoan = false;
    this.MicroLoanUnder = false;
    this.TransferHomeLoan = false;
    this.TransferBusinessLoan = false;
    this.OverDraft = false;
    
  } 
  
  eligibilityCalculatorHomeLoan() {
    this.FreeCreditScore = false;
    this.NewHomeLoan = false;
    this.LoanAgainstProperty = false;
    this.BusinessLoan = false;
    this.HomeLoan = false;
    this.CashCredit = false;
    this.LoanAgainstSecurity = false;
    this.GoldLoan = false;
    this.CarLoan = false;
    this.CommercialVehicleLoan = false;
    this.InfrastructureFinanceLoan = false;
    this.EMICalculatorHomeLoan = false;
    this.EligibilityCalculatorHomeLoan = !this.EligibilityCalculatorHomeLoan;
    this.MicroLoanUnder = false;
    this.TransferHomeLoan = false;
    this.TransferBusinessLoan = false;
    this.OverDraft = false;
    
  }

  

  microLoanUnder() {
    this.FreeCreditScore = false;
    this.NewHomeLoan = false;
    this.LoanAgainstProperty = false;
    this.BusinessLoan = false;
    this.HomeLoan = false;
    this.CashCredit = false;
    this.LoanAgainstSecurity = false;
    this.GoldLoan = false;
    this.CarLoan = false;
    this.CommercialVehicleLoan = false;
    this.InfrastructureFinanceLoan = false;
    this.EMICalculatorHomeLoan = false;
    this.EligibilityCalculatorHomeLoan = false;
    this.MicroLoanUnder = !this.MicroLoanUnder;
    this.TransferHomeLoan = false;
    this.TransferBusinessLoan = false;
    this.OverDraft = false;
    
  }


  transferHomeLoan() {
    this.FreeCreditScore = false;
    this.NewHomeLoan = false;
    this.LoanAgainstProperty = false;
    this.BusinessLoan = false;
    this.HomeLoan = false;
    this.CashCredit = false;
    this.LoanAgainstSecurity = false;
    this.GoldLoan = false;
    this.CarLoan = false;
    this.CommercialVehicleLoan = false;
    this.InfrastructureFinanceLoan = false;
    this.EMICalculatorHomeLoan = false;
    this.EligibilityCalculatorHomeLoan = false;
    this.MicroLoanUnder = false;
    this.TransferHomeLoan = !this.TransferHomeLoan;
    this.TransferBusinessLoan = false;
    this.OverDraft = false;
    
  }  
  
  transferBusinessLoan() {
    this.FreeCreditScore = false;
    this.NewHomeLoan = false;
    this.LoanAgainstProperty = false;
    this.BusinessLoan = false;
    this.HomeLoan = false;
    this.CashCredit = false;
    this.LoanAgainstSecurity = false;
    this.GoldLoan = false;
    this.CarLoan = false;
    this.CommercialVehicleLoan = false;
    this.InfrastructureFinanceLoan = false;
    this.EMICalculatorHomeLoan = false;
    this.EligibilityCalculatorHomeLoan = false;
    this.MicroLoanUnder = false;
    this.TransferHomeLoan = false;
    this.TransferBusinessLoan = !this.TransferBusinessLoan;
    this.OverDraft = false;
    
  } 
  
  overDraft() {
    this.FreeCreditScore = false;
    this.NewHomeLoan = false;
    this.LoanAgainstProperty = false;
    this.BusinessLoan = false;
    this.HomeLoan = false;
    this.CashCredit = false;
    this.LoanAgainstSecurity = false;
    this.GoldLoan = false;
    this.CarLoan = false;
    this.CommercialVehicleLoan = false;
    this.InfrastructureFinanceLoan = false;
    this.EMICalculatorHomeLoan = false;
    this.EligibilityCalculatorHomeLoan = false;
    this.MicroLoanUnder = false;
    this.TransferHomeLoan = false;
    this.TransferBusinessLoan = false;
    this.OverDraft = !this.OverDraft;
    
  }

   //Service Requests
   fraudandDispute() {
    this.FraudandDispute = !this.FraudandDispute;
    this.AccountServiceRequest = false;
    this.DuplicateStatementRequest = false;
    this.TrackYourOrder = false;
  }

  accountServiceRequest1() {
    this.FraudandDispute = false;
    this.AccountServiceRequest = !this.AccountServiceRequest;
    this.DuplicateStatementRequest = false;
    this.TrackYourOrder = false;
  }

  duplicateStatementRequest() {
    this.FraudandDispute = false;
    this.AccountServiceRequest = false;
    this.DuplicateStatementRequest = !this.DuplicateStatementRequest;
    this.TrackYourOrder = false;
  }


  trackYourOrder() {
    this.FraudandDispute = false;
    this.AccountServiceRequest = false;
    this.DuplicateStatementRequest = false;
    this.TrackYourOrder = !this.TrackYourOrder;
  }



  //Insurance
   personalAccidentProtection() {
    this.PersonalAccidentProtection = !this.PersonalAccidentProtection;
    this.HealthInsurance = false;
    this.HospitalDailyCashPlans = false;
    this.FamilyProtectionPlans = false;
    this.LifeCover = false;
    this.AssuredSavingsPlan = false;
    this.GuaranteedSavingsPlan = false;
    this.TwoWheelerInsurance = false;
    this.CarInsurance = false;
    this.CommercialVehicleInsurance = false;
    this.PradhanMantriJivanJyotiBimaYojna = false;
    this.PradhanMantriSurakshaBimaYojna = false;
    this.MyPolicies = false;    
  }

  healthInsurance() {
    this.PersonalAccidentProtection = false;
    this.HealthInsurance = !this.HealthInsurance;
    this.HospitalDailyCashPlans = false;
    this.FamilyProtectionPlans = false;
    this.LifeCover = false;
    this.AssuredSavingsPlan = false;
    this.GuaranteedSavingsPlan = false;
    this.TwoWheelerInsurance = false;
    this.CarInsurance = false;
    this.CommercialVehicleInsurance = false;
    this.PradhanMantriJivanJyotiBimaYojna = false;
    this.PradhanMantriSurakshaBimaYojna = false;
    this.MyPolicies = false;    
  }

  hospitalDailyCashPlans() {
    this.PersonalAccidentProtection = false;
    this.HealthInsurance = false;
    this.HospitalDailyCashPlans = !this.HospitalDailyCashPlans;
    this.FamilyProtectionPlans = false;
    this.LifeCover = false;
    this.AssuredSavingsPlan = false;
    this.GuaranteedSavingsPlan = false;
    this.TwoWheelerInsurance = false;
    this.CarInsurance = false;
    this.CommercialVehicleInsurance = false;
    this.PradhanMantriJivanJyotiBimaYojna = false;
    this.PradhanMantriSurakshaBimaYojna = false;
    this.MyPolicies = false;    
  }

  familyProtectionPlans() {
    this.PersonalAccidentProtection = false;
    this.HealthInsurance = false;
    this.HospitalDailyCashPlans = false;
    this.FamilyProtectionPlans = !this.FamilyProtectionPlans;
    this.LifeCover = false;
    this.AssuredSavingsPlan = false;
    this.GuaranteedSavingsPlan = false;
    this.TwoWheelerInsurance = false;
    this.CarInsurance = false;
    this.CommercialVehicleInsurance = false;
    this.PradhanMantriJivanJyotiBimaYojna = false;
    this.PradhanMantriSurakshaBimaYojna = false;
    this.MyPolicies = false;    
  }

  lifeCover() {
    this.PersonalAccidentProtection = false;
    this.HealthInsurance = false;
    this.HospitalDailyCashPlans = false;
    this.FamilyProtectionPlans = false;
    this.LifeCover = !this.LifeCover;
    this.AssuredSavingsPlan = false;
    this.GuaranteedSavingsPlan = false;
    this.TwoWheelerInsurance = false;
    this.CarInsurance = false;
    this.CommercialVehicleInsurance = false;
    this.PradhanMantriJivanJyotiBimaYojna = false;
    this.PradhanMantriSurakshaBimaYojna = false;
    this.MyPolicies = false;    
  }

  assuredSavingsPlan() {
    this.PersonalAccidentProtection = false;
    this.HealthInsurance = false;
    this.HospitalDailyCashPlans = false;
    this.FamilyProtectionPlans = false;
    this.LifeCover = false;
    this.AssuredSavingsPlan = !this.AssuredSavingsPlan;
    this.GuaranteedSavingsPlan = false;
    this.TwoWheelerInsurance = false;
    this.CarInsurance = false;
    this.CommercialVehicleInsurance = false;
    this.PradhanMantriJivanJyotiBimaYojna = false;
    this.PradhanMantriSurakshaBimaYojna = false;
    this.MyPolicies = false;    
  }
  guaranteedSavingsPlan() {
    this.PersonalAccidentProtection = false;
    this.HealthInsurance = false;
    this.HospitalDailyCashPlans = false;
    this.FamilyProtectionPlans = false;
    this.LifeCover = false;
    this.AssuredSavingsPlan = false;
    this.GuaranteedSavingsPlan = !this.GuaranteedSavingsPlan;
    this.TwoWheelerInsurance = false;
    this.CarInsurance = false;
    this.CommercialVehicleInsurance = false;
    this.PradhanMantriJivanJyotiBimaYojna = false;
    this.PradhanMantriSurakshaBimaYojna = false;
    this.MyPolicies = false;    
  }
  twoWheelerInsurance() {
    this.PersonalAccidentProtection = false;
    this.HealthInsurance = false;
    this.HospitalDailyCashPlans = false;
    this.FamilyProtectionPlans = false;
    this.LifeCover = false;
    this.AssuredSavingsPlan = false;
    this.GuaranteedSavingsPlan = false;
    this.TwoWheelerInsurance = !this.TwoWheelerInsurance;
    this.CarInsurance = false;
    this.CommercialVehicleInsurance = false;
    this.PradhanMantriJivanJyotiBimaYojna = false;
    this.PradhanMantriSurakshaBimaYojna = false;
    this.MyPolicies = false;    
  }
  carInsurance() {
    this.PersonalAccidentProtection = false;
    this.HealthInsurance = false;
    this.HospitalDailyCashPlans = false;
    this.FamilyProtectionPlans = false;
    this.LifeCover = false;
    this.AssuredSavingsPlan = false;
    this.GuaranteedSavingsPlan = false;
    this.TwoWheelerInsurance = false;
    this.CarInsurance = !this.CarInsurance;
    this.CommercialVehicleInsurance = false;
    this.PradhanMantriJivanJyotiBimaYojna = false;
    this.PradhanMantriSurakshaBimaYojna = false;
    this.MyPolicies = false;    
  }

  commercialVehicleInsurance() {
    this.PersonalAccidentProtection = false;
    this.HealthInsurance = false;
    this.HospitalDailyCashPlans = false;
    this.FamilyProtectionPlans = false;
    this.LifeCover = false;
    this.AssuredSavingsPlan = false;
    this.GuaranteedSavingsPlan = false;
    this.TwoWheelerInsurance = false;
    this.CarInsurance = false;
    this.CommercialVehicleInsurance = !this.CommercialVehicleInsurance;
    this.PradhanMantriJivanJyotiBimaYojna = false;
    this.PradhanMantriSurakshaBimaYojna = false;
    this.MyPolicies = false;    
  }

  pradhanMantriJivanJyotiBimaYojna() {
    this.PersonalAccidentProtection = false;
    this.HealthInsurance = false;
    this.HospitalDailyCashPlans = false;
    this.FamilyProtectionPlans = false;
    this.LifeCover = false;
    this.AssuredSavingsPlan = false;
    this.GuaranteedSavingsPlan = false;
    this.TwoWheelerInsurance = false;
    this.CarInsurance = false;
    this.CommercialVehicleInsurance = false;
    this.PradhanMantriJivanJyotiBimaYojna = !this.PradhanMantriJivanJyotiBimaYojna;
    this.PradhanMantriSurakshaBimaYojna = false;
    this.MyPolicies = false;    
  }

  pradhanMantriSurakshaBimaYojna() {
    this.PersonalAccidentProtection = false;
    this.HealthInsurance = false;
    this.HospitalDailyCashPlans = false;
    this.FamilyProtectionPlans = false;
    this.LifeCover = false;
    this.AssuredSavingsPlan = false;
    this.GuaranteedSavingsPlan = false;
    this.TwoWheelerInsurance = false;
    this.CarInsurance = false;
    this.CommercialVehicleInsurance = false;
    this.PradhanMantriJivanJyotiBimaYojna = false;
    this.PradhanMantriSurakshaBimaYojna = !this.PradhanMantriSurakshaBimaYojna;
    this.MyPolicies = false;    
  }

  myPolicies() {
    this.PersonalAccidentProtection = false;
    this.HealthInsurance = false;
    this.HospitalDailyCashPlans = false;
    this.FamilyProtectionPlans = false;
    this.LifeCover = false;
    this.AssuredSavingsPlan = false;
    this.GuaranteedSavingsPlan = false;
    this.TwoWheelerInsurance = false;
    this.CarInsurance = false;
    this.CommercialVehicleInsurance = false;
    this.PradhanMantriJivanJyotiBimaYojna = false;
    this.PradhanMantriSurakshaBimaYojna = false;
    this.MyPolicies = !this.MyPolicies;    
  }


}


