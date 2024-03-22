import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchComponent } from './branch/branch.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { DepartmentComponent } from './department/department.component';
import { ProductsComponent } from './products/products.component';
import { ProductfeesComponent } from './productfees/productfees.component';
import { OtherservicesComponent } from './otherservices/otherservices.component';
import { CourierdetailsComponent } from './courierdetails/courierdetails.component';
import { DocumentcategoryComponent } from './documentcategory/documentcategory.component';
import { AddComplianceComponent } from './add-compliance/add-compliance.component';

import { EditDocumentCategoryComponent } from './edit-document-category/edit-document-category.component';
import { EmployeeComponent } from './employee/employee.component';
import { NewCustomersComponent } from './new-customers/new-customers.component';
import { AddNewCustomerComponent } from './add-new-customer/add-new-customer.component';
import { UpdateNewCustomerComponent } from './update-new-customer/update-new-customer.component';
import { NewCustomerInfoComponent } from './new-customer-info/new-customer-info.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NewsAlertComponent } from './news-alert/news-alert.component';
import { TechSupportComponent } from './tech-support/tech-support.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { ViewTechsupportComponent } from './view-techsupport/view-techsupport.component';
import { AllInvoicesComponent } from './all-invoices/all-invoices.component';
import { AllTransactionsComponent } from './all-transactions/all-transactions.component';
import { AllInteractionsComponent } from './all-interactions/all-interactions.component';
import { AllComplaintsComponent } from './all-complaints/all-complaints.component';
import { RMWiseReportComponent } from './rmwise-report/rmwise-report.component';
import { AllDailyVisitComponent } from './all-daily-visit/all-daily-visit.component';
import { ViewAddDailyvisitComponent } from './view-add-dailyvisit/view-add-dailyvisit.component';
import { AlldailyleadsComponent } from './alldailyleads/alldailyleads.component';
import { ViewAddDailyleadsComponent } from './view-add-dailyleads/view-add-dailyleads.component';
import { AllTIDComponent } from './all-tid/all-tid.component';
import { AddTIDComponent } from './add-tid/add-tid.component';
import { TidgenerationComponent } from './tidgeneration/tidgeneration.component';
import { AllCustomerListComponent } from './all-customer-list/all-customer-list.component';
import { AllComplaintsMainComponent } from './all-complaints-main/all-complaints-main.component';
import { AddCustomerComplaintsMainComponent } from './add-customer-complaints-main/add-customer-complaints-main.component';
import { ViewCustomerComplaintsMainComponent } from './view-customer-complaints-main/view-customer-complaints-main.component';
import { UserRolePermissionComponent } from './user-role-permission/user-role-permission.component';
import { TaskAppointmentComponent } from './task-appointment/task-appointment.component';
import { TaskAppointmentDemoComponent } from './task-appointment-demo/task-appointment-demo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNewUserroleComponent } from './add-new-userrole/add-new-userrole.component';
import { ViewCustomerDetailsComponent } from './view-customer-details/view-customer-details.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductFeesComponent } from './add-product-fees/add-product-fees.component';
import { ViewProductFeesComponent } from './view-product-fees/view-product-fees.component';
import { AddOtherServicesComponent } from './add-other-services/add-other-services.component';
import { ViewOtherServicesComponent } from './view-other-services/view-other-services.component';
import { AddCourierComponent } from './add-courier/add-courier.component';
import { ViewCourierComponent } from './view-courier/view-courier.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddNewsAlertComponent } from './add-news-alert/add-news-alert.component';
import { ViewNewsAlertComponent } from './view-news-alert/view-news-alert.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AccountopeningFormComponent } from './accountopening-form/accountopening-form.component';
import { LoginComponent } from './login/login.component';
import { SetComponent } from './set/set.component';
import { ViewBranchComponent } from './view-branch/view-branch.component';
import { AuthGuard } from './auth.guard';
import { ViewComplianceComponent } from './view-compliance/view-compliance.component';
import { DemoComponent } from './demo/demo.component';
// import { ViewCustomerDetailsNewComponent } from './view-customer-details-new/view-customer-details-new.component';


const routes: Routes = [


  { path: '', component: LoginComponent, 
    children: [ { path: '', component: LoginComponent },
     
    ],
  },

  {
    path: 'set',
    component: SetComponent, 
    children: [
      {
        path : 'header' , component : HeaderComponent , canActivate:[AuthGuard]
       
      },
      {
        path : 'user-profile' , component : UserProfileComponent , canActivate:[AuthGuard]
      },
      {
        path : 'sidenav' , component : SidenavComponent , canActivate:[AuthGuard]
      },
      {
        path : '' , component : DashboardComponent , canActivate:[AuthGuard]
      },
    
      {
        path : 'branch' , component : BranchComponent , canActivate:[AuthGuard]
      },
      {
        path : 'add-branch' , component : AddBranchComponent , canActivate:[AuthGuard]
      },
      {
        path : 'view-branch/:id' , component : ViewBranchComponent , canActivate:[AuthGuard]
      },
      
      {
        path : 'compliance' , component : ComplianceComponent , canActivate:[AuthGuard]
      },
      { path: "add-compliance", component: AddComplianceComponent , canActivate:[AuthGuard]},
      { path: "view-compliance/:id", component: ViewComplianceComponent , canActivate:[AuthGuard]},
      {
        path : 'department' , component : DepartmentComponent , canActivate:[AuthGuard]
      },
      {
        path : 'add-department' , component : AddDepartmentComponent , canActivate:[AuthGuard]
      },
      {
        path : 'view-department/:id' , component : ViewDepartmentComponent , canActivate:[AuthGuard]
      },
      {
        path : 'product' , component : ProductsComponent , canActivate:[AuthGuard]
      },
      {
        path : 'add-product' , component : AddProductComponent , canActivate:[AuthGuard]
      },
      {
        path : 'view-product/:id' , component : ViewProductComponent , canActivate:[AuthGuard]
      },
      {
        path : 'productFees' , component : ProductfeesComponent , canActivate:[AuthGuard]
      },
      {
        path : 'add-productFees' , component : AddProductFeesComponent , canActivate:[AuthGuard]
      },
      {
        path : 'view-product-fees/:id' , component : ViewProductFeesComponent , canActivate:[AuthGuard]
      },
      
      {
        path : 'otherservices' , component : OtherservicesComponent , canActivate:[AuthGuard]
      },
      
      {
        path : 'add-other-services' , component : AddOtherServicesComponent , canActivate:[AuthGuard]
      },
      
      {
        path : 'view-other-services/:id' , component : ViewOtherServicesComponent , canActivate:[AuthGuard]
      },
      {
        path : 'courier' , component : CourierdetailsComponent , canActivate:[AuthGuard]
      }
    ,
    {
      path : 'add-courier' , component : AddCourierComponent , canActivate:[AuthGuard]
    }
    ,
    {
      path : 'view-courier/:id' , component : ViewCourierComponent , canActivate:[AuthGuard]
    }
    ,
    {
      path : 'documentcategory' , component : DocumentcategoryComponent , canActivate:[AuthGuard]
    },
    { path: "edit-document-category/:id", component: EditDocumentCategoryComponent , canActivate:[AuthGuard]},
    { path: "employee", component: EmployeeComponent  , canActivate:[AuthGuard]},
    { path: "add-employee", component: AddEmployeeComponent  , canActivate:[AuthGuard]},
    
    { path: "user-role-permission", component: UserRolePermissionComponent , canActivate:[AuthGuard] },
    { path: "add-new-userrole", component: AddNewUserroleComponent , canActivate:[AuthGuard] },
    { path: "tasksappointments", component: TaskAppointmentComponent , canActivate:[AuthGuard] },
    { path: "tasksappointments-demo", component: TaskAppointmentDemoComponent , canActivate:[AuthGuard] },
    
    
    { path: "allnewcustomer", component: NewCustomersComponent , canActivate:[AuthGuard]},
    { path: "add-new-customer", component: AddNewCustomerComponent , canActivate:[AuthGuard]},
    { path: "new-customer-info", component: NewCustomerInfoComponent , canActivate:[AuthGuard]},
    { path: "update-new-customer", component: UpdateNewCustomerComponent , canActivate:[AuthGuard]},
    
    
    { path: "alldailyvisits", component: AllDailyVisitComponent , canActivate:[AuthGuard] },
    { path: "view-add-dailyvisits/:id", component: ViewAddDailyvisitComponent , canActivate:[AuthGuard] },
    // { path: "view-all-visits", component: ViewAllVisitsComponent},
    // { path: "add-visit-details", component: AddVisitDetailsComponent},
    
    
    { path: "alldailyleads", component: AlldailyleadsComponent , canActivate:[AuthGuard] },
    { path: "view-add-dailyLeads/:id", component: ViewAddDailyleadsComponent , canActivate:[AuthGuard] },
    // { path: "view-all-leads", component: ViewAllLeadsComponent},
    // { path: "add-leads-details", component: AllLeadsDetailsComponent},
    
    { path: "alltid", component: AllTIDComponent , canActivate:[AuthGuard]}, 
    { path: "add-tids", component: AddTIDComponent , canActivate:[AuthGuard]},
    { path: "tidgeneration/:id", component: TidgenerationComponent , canActivate:[AuthGuard]},
    // { path: "tid-update-status", component: TidUpdateStatusComponent},
    // { path: "tid-update-courier-details", component: TidUpdateCourierDetailsComponent},
    { path: "account-opening-form", component: AccountopeningFormComponent , canActivate:[AuthGuard] },
    { path: "customerslist", component: AllCustomerListComponent , canActivate:[AuthGuard] },
    { path: "view-customer-details/:id", component: ViewCustomerDetailsComponent , canActivate:[AuthGuard] },
    { path: "view-customer-details", component: ViewCustomerDetailsComponent , canActivate:[AuthGuard] },
    
    { path: "allcomplaintsmain", component: AllComplaintsMainComponent , canActivate:[AuthGuard] },
    { path: "add-customer-complaints", component: AddCustomerComplaintsMainComponent , canActivate:[AuthGuard]},
    { path: "view-customer-complaints-main/:id", component: ViewCustomerComplaintsMainComponent , canActivate:[AuthGuard] },
    
    //remaining copy
    // { path: "view-complain-details", component: ViewComplaintDetailsComponent },
      //reports 
      { path: "allinvoices", component: AllInvoicesComponent , canActivate:[AuthGuard] },
      { path: "alltransactions", component: AllTransactionsComponent , canActivate:[AuthGuard] },
      { path: "allinteraction", component: AllInteractionsComponent , canActivate:[AuthGuard] },
      { path: "allcomplaints-Sub", component: AllComplaintsComponent , canActivate:[AuthGuard] },
      { path: "RmWisereport", component: RMWiseReportComponent , canActivate:[AuthGuard] },
    
    
    
    { path: "alltechsupport", component: TechSupportComponent , canActivate:[AuthGuard] },
    { path: "add-ticket", component: AddTicketComponent  , canActivate:[AuthGuard]},
    { path: "view-techsupport/:id", component: ViewTechsupportComponent , canActivate:[AuthGuard] },
    
    { path: "newsalert", component: NewsAlertComponent  , canActivate:[AuthGuard]},
    { path: "add-news-alert", component: AddNewsAlertComponent , canActivate:[AuthGuard] },
    { path: "view-news-alert/:id", component: ViewNewsAlertComponent , canActivate:[AuthGuard] },
    { path: "change-password", component: ChangePasswordComponent , canActivate:[AuthGuard] },

    { path: "demo", component: DemoComponent , canActivate:[AuthGuard] },
    ],
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
