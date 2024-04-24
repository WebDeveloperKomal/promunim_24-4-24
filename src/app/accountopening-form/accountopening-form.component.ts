import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AofTwomodel } from './aofmodel2';
import { BranchModel } from '../branch/branch.component.model';
import { TidService } from '../tid.service';
import { HttpClient } from '@angular/common/http';
import { getAllBranchDetailsModel } from './getAllBranchDetailsModel';


@Component({
  selector: 'app-accountopening-form',
  templateUrl: './accountopening-form.component.html',
  styleUrls: ['./accountopening-form.component.css']
})
export class AccountopeningFormComponent {
  step1 !: FormGroup;
  step2 !: FormGroup;
  step21 !: FormGroup;
  aadhar !: FormGroup;
  pan !: FormGroup;
  step3 !: FormGroup;
  step31 !: FormGroup;
  step33 !: FormGroup;
  step34 !: FormGroup;
  step4 !: FormGroup;
  step5 !: FormGroup;
  step6 !: FormGroup;
  step61 !: FormGroup;
  step62 !: FormGroup;
  savepro !: FormGroup;

  industry_sector_id : boolean = false

  getAllBranchDetails : getAllBranchDetailsModel [] = [];
  AOF2: AofTwomodel = new AofTwomodel;


  branchId = localStorage.getItem('branchId');
  tid = localStorage.getItem('tid');
  aofnumber = localStorage.getItem('aofnumber');
  cudt_id : any ;
  account_number : any ;

  branchList:BranchModel[] = [];
  collectionSize =100;

  tidToSearch: any;

  showForm: boolean = false;
  declaration: string = '';
  getdata: any[] = [] ;
  getdata1: any[] = [] ;
  getdata2 : any[] = [] ;
  getdata3 : any ;
  hidedata1 : boolean = false ;
  onCheckboxChange() {
    this.showForm = !this.showForm;
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted successfully:', this.declaration);
    } else {
      console.error('Invalid form submission');
    }
  }



  activeTab: string = 'tab1';
  individual: boolean = true;
  nonindividual: boolean = false;
  selfemployee: boolean = false;

  formstep2 : boolean = false ;
  URL: any;
  photo!: File;
  sign!: File;

  adhardata : any ;
  pandata : any ;
  docImage!: File;

  onPhotoSelected(event: any) {
    this.photo = event.target.files[0];
  }

  onSignSelected(event: any) {
    this.sign = event.target.files[0];
  }


  onDocSelected(event: any) {
    this.docImage = event.target.files[0];
  }



  AOF3name: any;
  docCategoryList = [{
    name: '',
    id: 0,
    cid: 0
  }]


  document:any;
  docType = [{
    name: '',
    id: 0,
    catId: 0
  }]

  prod: any = { proSelect: '' };
  productList: any[] = [{
    branchId: 0,
    product_fees: '',
    minValue: 0,
    productId: 0,
    maxValue: 0,
    productName: ''
  }];

  getAllBranch: any[] = [];

  constructor(private formBuilder: FormBuilder ,private http: HttpClient, private apiservice: ApiService, private sharedService: ApiService, private route: ActivatedRoute, private router: Router, private tidService: TidService) {

    //Mobile NUmbaer Otp
    this.step1 = this.formBuilder.group({
      emailId: ['', Validators.required],
    })
    this.step1 = this.formBuilder.group({
      emailId: ['', Validators.required],
      otp: ['', Validators.required]
    })

    this.step3 = this.formBuilder.group({
      rdobdate: ['', Validators.required],
      industry_sector_id: ['', Validators.required],
      billingCycle : ['', Validators.required],
      // industry_sector_name: "Individual",
      industry_sector_name: ['', Validators.required],
      AccWorkStartDate : ['', Validators.required],
      state : ['', Validators.required],
      pin : ['', Validators.required],
      district : ['', Validators.required],
      operationMode: ['', Validators.required],
      accFreqStatement: ['', Validators.required],
      branch_id: ['', Validators.required],
      productId: ['', Validators.required],
      companyName: ['', Validators.required],
      customerFullName: ['', Validators.required],
      emailId: ['', Validators.required],
      contactNo: ['', Validators.required],
      city: ['', Validators.required],
      natureOfBussiness: ['', Validators.required],
      address: ['', Validators.required],
      constitutionOfBusiness : ['', Validators.required]
    })

    
      this.savepro = this.formBuilder.group({
      // tid: localStorage.getItem("tid"),
      // billingCycle: localStorage.getItem("billingCycle"),
      // assignDate:  ['', Validators.required],
      // productId: localStorage.getItem("productId")
      tid: ['', Validators.required],
      billingCycle: ['', Validators.required],
      assignDate: ['', Validators.required],
      productId: ['', Validators.required],

    })

    this.step3.get('industry_sector_id')?.valueChanges.subscribe((value) => {
      const selectedDoc = this.docCategoryList.find(doc => doc.cid === value);
      if (selectedDoc) {
        this.step3.get('industry_sector_name')?.setValue(selectedDoc.name);
      }
    });


      this.step21 = this.formBuilder.group({
        tid: ['', Validators.required],
        customerDocumentCategoryId:  ['', Validators.required],
        customerDocumentType:  ['', Validators.required]
      })

      
      this.aadhar = this.formBuilder.group({
        tid: ['', Validators.required],
        adaharNumber: ['', Validators.required]
      })

      this.pan = this.formBuilder.group({
        tid: ['', Validators.required],
        panNumber: ['', Validators.required]
      })


    //AOF:-2
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


    this.step4 = this.formBuilder.group({
      tid: ['', Validators.required],
      tempCustdorordob: ['', Validators.required],
      branchid:['', Validators.required],
      aofNumber: ['', Validators.required],
      // aofNumber: localStorage.getItem('aofnumber'),
      tempCustApplicantName: ['', Validators.required],
      tempCustPanNumber: ['', Validators.required],
      tempCustUIN: ['', Validators.required],
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
      tempCustMailingAddressTelephone: ['', Validators.required]
    });

    this.step31 = this.formBuilder.group({
      // tid: localStorage.getItem('tid'),
      tid :['', Validators.required], 
      dob: ['', Validators.required],
      panNumber: ['', Validators.required]
    });

    //step33
    this.step33 = this.formBuilder.group({
      tid:['', Validators.required],
      name: ['', Validators.required],
      panNumber: ['', Validators.required],
      aadharNumber: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      religion: ['', Validators.required],
      motherName: ['', Validators.required],
      designation: ['', Validators.required],
      mobile: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.required]
    });


    this.step34 = this.formBuilder.group({
      // authSignaturyId: localStorage.getItem('authSignaturyId'),
      authSignaturyId: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      anualIncome: ['', Validators.required],
      experience: ['', Validators.required],
      name: ['', Validators.required],
      aadharNumber : ['', Validators.required],
      gender : ['', Validators.required],
      nationality : ['', Validators.required],
      mobile: ['', Validators.required],
      religion : ['', Validators.required],
      motherName: ['', Validators.required],
      // fatherName: ['', Validators.required],
      designation: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.required]
    });


    this.step5 = this.formBuilder.group({
      auto_Debit_Date: ['', Validators.required],
      bank_account_no: ['', Validators.required],
      bankName: ['', Validators.required],
      fullName: ['', Validators.required],
      mob_no: ['', Validators.required],
      account_type: ['', Validators.required],
      tid: ['', Validators.required],
      customerAccountNumber:['', Validators.required],
      // customerAccountNumber: localStorage.getItem('aofnumber'),
      mode_of_payment: ['', Validators.required],
      debitAmount: ['', Validators.required],
      debit_type: ['', Validators.required],
      debit_frequency: ['', Validators.required],
      ifsc_no: ['', Validators.required],
      promunim_of_india_id: ['', Validators.required]
    })
  }

  onchange(event: any){
    // this.document = this.step4.get('customerDocumentCategoryId');
    // console.log(id);
    // console.log('DOCUMENT ID :::::::: ', this.id);
    const categoryId = event.target.value ;
    if (categoryId !== '0') {
    this.apiservice.docType(categoryId).subscribe(
  
        (data: any) => {
          this.docType = data.docType;
          
          console.log('Responsiiiiiiiiii',data.docType);
        },
        (error: any) => { console.error(error); }
      )
  }
  }

  ngOnInit() {

  // this.tid = this.tidService.getTid();

    // const tid = localStorage.getItem('tid');
    // if (tid) {
    //   this.step21.patchValue({ tid: tid });
    // }

   
  

    this.apiservice.docCategory().subscribe(  //AOF4
      (data: any) => {
        this.docCategoryList = data.docCategory;
        console.log('Response successful!!!!!!!!!!!!!!!!!!!!!!!!!', this.docCategoryList);
        console.log('Response successful!!!!!!!!!!!!!!!!!!!!!!!!!',data.data[0].cid);
        // localStorage.setItem('inCid', this.docCategoryList[0].cid);
        localStorage.setItem('id', data.docCategory.data[0].cid)
      },
      (error: any) => {
        console.error('API Error:', error);
      }
    );

    // this.apiservice.getAllBranch().subscribe(
    //   ( data: any) => {
    //     this.branchList=data.data;
    //     this.collectionSize = data.data.length ;
    //     console.log('Response successful!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ' , data.data);
    //     console.log('Response successful!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ' , data.data[2].branchId);
    //   },
    //   (error:any) => {
    //     console.error('API Error:', error);
    //   }

    // );

    this.http.get<any>('https://clientportal.promunim.com/send/get-branch')
    .subscribe(Response => {
      if (Response.status) {
        this.getAllBranch = Response.data;
      }
    });


    this.apiservice.productlist().subscribe(  //AOF6
      (data: any) => {
        this.productList = data.data;
        localStorage.setItem('branchId', data.data[0].branchId)
        console.log("Product List", data.data)
        console.log("uu", data.data[0].branchId)
      },
      (error: any) => {
        console.error('API Error:', error);
      }
    );


    // this.get_all_branch_details() ;
    // this.get_customer_docs() ;
    // this.get_offline_pan();
    // this.get_offline_adahar() ;
  }


  
  generateTid(): void {
    const newTid = 'your_tid_generation_logic_here';
    this.tidService.setTid(newTid);
  }

  generateOTP() {
    this.apiservice.generateOtp(this.step1.value).subscribe(
      (response: any) => {
        console.log('OTP generated:', response);
        Swal.fire({
          icon: 'success',
          title: 'OTP Generated Successfully!',
          text: 'Your OTP has been generated successfully. Check your email for the OTP.',
        });
      },
      (error: any) => {
        console.error('Error generating OTP:', error);
        // Display error message using Swal
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while generating OTP. Please try again later.',
        });
      }
    );
  }


  VerifyOTP() {
    this.apiservice.VerifyOtp(this.step1.value).subscribe(
      (response: any) => {
        console.log('OTP generated:', response);
        // console.log('Data sent in request:', this.step1.value);
        // Display success message using Swal
        Swal.fire({
          icon: 'success',
          title: 'OTP Verified Successfully!',
          text: 'Your OTP has been verified successfully.',
        });
      },
      (error: any) => {
        console.error('Error generating OTP:', error);
        Swal.fire({
          icon: 'error',
          title: 'OTP Verification Failed!',
          text: 'Invalid OTP. Please enter a valid OTP.',
        });
      }
    );
  }

  businessDetails() {
    console.log('Data sent in request:', this.step3.value);
    // if(this.step3.value == 1){
    //  this.hidedata1 =  !this.hidedata1
    // }
    this.apiservice.businessDetails(this.step3.value).subscribe(
      (response: any) => {
        console.log('businessDetails:', response);
        // console.log('businessDetails:', response.aofnumber);
        localStorage.setItem('aofnumber', response.aofnumber);
        localStorage.setItem('tid', response.tid);
         localStorage.setItem("customerAccountNumber" , response.tempCustId.customerId);
       console.log('tid', response.tid);
       console.log('tid', response.tempCustId.customerId);
        // console.log('Updated tid.......', response.industry_sector_id);
        localStorage.setItem('inCid',this.step3.value.industry_sector_id);
        localStorage.setItem('inName',this.step3.value.industry_sector_name);
        localStorage.setItem('productId',this.step3.value.productId);
        localStorage.setItem('billingCycle',this.step3.value.billingCycle);
        
        // console.log('####################@@@@@@@@@@@@@@@',this.step3.value.productId)
        // console.log('####################@@@@@@@@@@@@@@@', localStorage.getItem('productId '))

        Swal.fire({
          icon: 'success',
          title: 'Step 1 Process Completed!',
          text: 'Your account is now open. Step 1 process completed successfully.',
        });


        // window.location.reload()

      },
      (error: any) => {
        console.error('Error generating OTP:', error);
        Swal.fire({
          icon: 'error',
          title: 'Validation Error!',
          text: 'Please fill in all fields.',
        });
      }
    );
  }


  organizationIndividualDetails() {

   this.step4.value.aofNumber = localStorage.getItem("aofnumber") ;
   this.step4.value.tid = localStorage.getItem("tid") ;
    console.log('Data sent in request:', this.step4.value);
    this.apiservice.organizationIndividualDetails(this.step4.value).subscribe(
      (response: any) => {
        console.log('businessDetails:', response);
        // localStorage.setItem('aofnumber',response.aofnumber);
        // localStorage.setItem('tid',response.tid);
        console.log('Data sent in request:', this.step4.value);
        // console.log('hhhhhhhhhhhhhhhhhhhhhhhhhh@@@@@', localStorage.getItem('tid'));

        Swal.fire({
          icon: 'success',
          title: 'Step 3 - Details of Organisation & Individuals  Process Completed!',
          text: 'Your Process Completed!.',
        });
      },
      (error: any) => {
        console.error('Error organization Individual Details:', error);
        Swal.fire({
          icon: 'error',
          title: 'Validation Error!',
          text: 'Please fill in all fields.',
        });
      }
    );
  }

  getOfflineAadhar(){
    this.aadhar.value.tid = localStorage.getItem("tid") ;
    console.log("111111111111111111111111111111111 ::::::: ", this.aadhar.value , this.docImage);
    this.apiservice.getOfflineAadhar(this.aadhar.value , this.docImage).subscribe(
      (response: any) => {
        console.log("get Offline Aadhar ::::::: ", this.aadhar.value , this.docImage);
        Swal.fire({
          icon: 'success',
          title: 'Aadhar Uploaded!',
          text: 'Your document has been successfully uploaded.',
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.activeTab = 'tab2';
          }
        });
      },
      (error: any) => {
        console.error("not working", error);
        Swal.fire({
          icon: 'error',
          title: 'Validation Error!',
          text: 'Please fill in all fields.',
        });
      }
    );
    this.tidToSearch();
  }

  getOfflinePan(){
    this.pan.value.tid = localStorage.getItem("tid") ;
    console.log("111111111111111111111111111111111 ::::::: ", this.pan.value , this.docImage);
    this.apiservice.getOfflinePan(this.pan.value , this.docImage).subscribe(
      (response: any) => {
        console.log("get Offline Aadhar ::::::: ", this.pan.value , this.docImage);
        Swal.fire({
          icon: 'success',
          title: 'Pan Uploaded!',
          text: 'Your document has been successfully uploaded.',
        });
      },
      (error: any) => {
        console.error("not working", error);
        Swal.fire({
          icon: 'error',
          title: 'Validation Error!',
          text: 'Please fill in all fields.',
        });
      }
    );
    this.tidToSearch();
  }

  
getDoc(){

  if (!this.docImage) {
  Swal.fire({
  icon: 'error',
  title: 'No Document Selected!',
  text: 'Please select a document to upload.',
  });
  return; // Exit the function early if no document is selected
  }
  
  this.step21.value.tid = localStorage.getItem("tid") ;
  this.step21.value.customerDocumentCategoryId = localStorage.getItem("inCid") ;
  this.step21.value.customerDocumentType = localStorage.getItem("inName") ;
  console.log("111111111111111111111111111111111 ::::::: ", this.step21.value , this.docImage);
  this.apiservice.getDoc(this.step21.value , this.docImage).subscribe(
  (response: any) => {
  console.log("AOF3111111 ::::::: ", this.step21.value , this.docImage);
  Swal.fire({
  icon: 'success',
  title: 'Document Uploaded!',
  text: 'Your document has been successfully uploaded.',
  });
  },
  (error: any) => {
  console.error("not working", error);
  Swal.fire({
  icon: 'error',
  title: 'Validation Error!',
  text: 'Please fill in all fields.',
  });
  }
  );
  this.tidToSearch();
  }
  // getDoc(){ 
  //   this.step21.value.tid = localStorage.getItem("tid") ;
  //   this.step21.value.customerDocumentCategoryId = localStorage.getItem("inCid") ;
  //   this.step21.value.customerDocumentType = localStorage.getItem("inName") ;
  //   console.log("111111111111111111111111111111111 ::::::: ", this.step21.value , this.docImage);
  //   this.apiservice.getDoc(this.step21.value , this.docImage).subscribe(
  //     (response: any) => {
  //       console.log("AOF3111111 ::::::: ", this.step21.value , this.docImage);
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Document Uploaded!',
  //         text: 'Your document has been successfully uploaded.',
  //       });
  //     },
  //     (error: any) => {
  //       console.error("not working", error);
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Validation Error!',
  //         text: 'Please fill in all fields.',
  //       });
  //     }
  //   );
  //   this.tidToSearch();
  // }

   
  personalInfo() {
    this.step31.value.tid = localStorage.getItem("tid") ;
    console.log("AOF2 ::::::: ", this.step31.value , this.photo, this.sign);
    // this.step31.tid  = localStorage.getItem('tid')
    this.apiservice.personalInfo(this.step31.value , this.photo, this.sign).subscribe(
      (response: any) => {
        // console.log("response ::::::: ", this.step31.value , this.photo, this.sign);
        console.log("response ::::::: ", response);
        console.log("authSignaturyId ::::::: ", response.authSignaturyId );
        localStorage.setItem('authSignaturyId', response.authSignaturyId);
        // console.log("authSignaturyId ::::::: ", localStorage.getItem('authSignaturyId'));

        Swal.fire({
          icon: 'success',
          title: 'Verification Process Completed!',
          text: 'Your Verification Process Completed!.',
        });
      },
      (error: any) => {
        console.error("not working", error);
        Swal.fire({
          icon: 'error',
          title: 'Validation Error!',
          text: 'Please fill in all fields.',
        });
      }
    );
    this.tidToSearch();
  }

  personalInfo1() {
    this.step34.value.authSignaturyId = localStorage.getItem("authSignaturyId") ;
    console.log('Data sent in request:', this.step34.value);
    this.apiservice.personalInfo1(this.step34.value).subscribe(
      (response: any) => {
        console.log('OTP generated:', response);
        console.log('Data sent in request:', this.step34.value);
        // Display success message using Swal
        Swal.fire({
          icon: 'success',
          title: 'Personal Information ',
          text: 'Personal Information successfully.',
        });
      },
      (error: any) => {
        console.error('Error generating OTP:', error);
        Swal.fire({
          icon: 'error',
          title: 'Validation Error!',
          text: 'Please fill in all fields.',
        });
      }
    );
  }

  onsubmit2() {
    this.step33.value.tid = localStorage.getItem("tid")
    console.log("AOF2 ::::::: ", this.step33.value, this.photo, this.sign);
    this.apiservice.newAofstep3(this.step33.value, this.photo, this.sign).subscribe(
      (response: any) => {
        // console.log("AOF3111111 ::::::: ", this.step33.value , this.photo, this.sign);
        // console.log("AOF3111111 ::::::: ", this.step33.value.tid );
        Swal.fire({
          icon: 'success',
          title: 'Authorised signatory Details Saved ',
          text: 'Your Authorised signatory Details Saved successfully.',
        });
      },
      (error: any) => {
        console.error("not working", error);
        Swal.fire({
          icon: 'error',
          title: 'Validation Error!',
          text: 'Please fill in all fields.',
        });
      }
    );
  }

  savePro() {
    this.savepro.value.tid = localStorage.getItem("tid");
    this.savepro.value.billingCycle = localStorage.getItem("billingCycle");
    this.savepro.value.productId = localStorage.getItem("productId");
    console.log("savePro values : ", this.savepro.value); 
    this.apiservice.savePro(this.savepro.value).subscribe(
      (response: any) => {  
        console.log("savePro response$$$$$$$ ", this.savepro.value);
        console.log("savePro response$$$$$$$ ", response); // Log the response received from the server
        
        localStorage.setItem("customerAccountNumber", response.customerAccountNumber); 
        localStorage.setItem("accountNumber", response.accountNumber); 
        console.log("savePro Account Number ", localStorage.getItem('accountNumber'));
      }, 
      (error: any) => {
        console.error("Error in savePro: ", error); // Log any errors that occur during the request
      }
    );
  }
  

  bankDetails() {
    this.step5.value.customerAccountNumber = localStorage.getItem("accountNumber") ;
    this.step5.value.tid = localStorage.getItem("tid");
    console.log('Data sent in request:', this.step5.value);
    this.apiservice.bankDetails(this.step5.value).subscribe(
      (response: any) => {
        console.log('OTP gene rated:', response);
        console.log('Data sent in request:', this.step5.value);
        Swal.fire({
          icon: 'success',
          // title: 'Bank Details Process Completed!',
          title: 'Your Registation Process Completed!',
          text: 'Your Registation Process completed successfully.',
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.activeTab = 'tab6';
          }
        });
      },

      (error: any) => {
        console.error('Error generating OTP:', error);
        Swal.fire({
          icon: 'error',
          title: 'Validation Error!',
          text: 'Please fill in all fields.',
        });
      }
    );
  }

 

  get_all_branch_details(){
   let tid = localStorage.getItem("tid");
   let cudt_id = localStorage.getItem("customerAccountNumber");
   let account_number = localStorage.getItem("accountNumber");
   console.log("tid1 ",tid ,cudt_id, account_number );
    this.apiservice.get_all_branch_details(tid,cudt_id, account_number).subscribe(
      (response: any) => {  

        // this.getdata = response.oldbankDetails ;
        this.getdata = response.AuthorizedSignatoryDetails ;
        
        this.getdata1 = response.businessdetails
         ;
        this.getdata2 = response.oldbankDetails ;
        this.getdata3 = response ;
        console.log("savePro response$$$$$$$1 ", response);
        console.log("savePro response$$$$$$$1 ", response.businessdetails[0].companyName);
    }, 
      (error: any) => {
        console.error("Error in savePro: ", error); 
      }
    );
  }

  get_customer_docs(){
    let tid = localStorage.getItem("tid");
    console.log("tid2 ",tid);
    this.apiservice.get_customer_docs(this.tid).subscribe(
      (response: any) => {  
        console.log("savePro response$$$$$$$2 ", response); 
    }, 
      (error: any) => {
        console.error("Error in savePro: ", error); 
      }
    );
  }


  get_offline_pan(){
    let tid = localStorage.getItem("tid");
    console.log("tid3 ",tid);
    this.apiservice.get_offline_pan(this.tid).subscribe(
      (response: any) => {  
        this.pandata = response.data ;
        console.log("savePro response$$$$$$$3 ", response.data); 
    }, 
      (error: any) => {
        console.error("Error in savePro: ", error); 
      }
    );
  }

  get_offline_adahar(){
    let tid = localStorage.getItem("tid");
    console.log("tid4 ",tid);
    this.apiservice.get_offline_adahar(this.tid).subscribe(
      (response: any) => {  
        this.adhardata = response.data ;
      
        console.log("savePro response$$$$$$$3 ", response.data); 
        console.log("savePro response$$$$$$$4 ", response); 
    }, 
      (error: any) => {
        console.error("Error in savePro: ", error); 
      }
    );
  }

  allreviewdata(){
    this.get_all_branch_details() ;
    this.get_customer_docs();
    this.get_offline_pan();
    this.get_offline_adahar();


  }


  performFinishActions() {
    this.onsubmit2();
    // this.savePro();
    this.changeTab('tab4');
}

  changeTab(tabId: string) {
    this.activeTab = tabId;
    if(tabId == "tab2"){
    this.formstep2  == !this.formstep2
    } 
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

}

function generateTid() {
  throw new Error('Function not implemented.');
}

