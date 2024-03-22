import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BranchComponent } from './branch/branch.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { ComplianceComponent } from './compliance/compliance.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import '@angular/localize/init';
import { DepartmentComponent } from './department/department.component';
import { ProductsComponent } from './products/products.component';
import { ProductfeesComponent } from './productfees/productfees.component';
import { OtherservicesComponent } from './otherservices/otherservices.component';
import { CourierdetailsComponent } from './courierdetails/courierdetails.component';
import { DocumentcategoryComponent } from './documentcategory/documentcategory.component';

import { AddComplianceComponent } from './add-compliance/add-compliance.component';
import { ViewComplianceComponent } from './view-compliance/view-compliance.component';
import { EditDocumentCategoryComponent } from './edit-document-category/edit-document-category.component';
import { EmployeeComponent } from './employee/employee.component';
import { NewCustomersComponent } from './new-customers/new-customers.component';
import { AddNewCustomerComponent } from './add-new-customer/add-new-customer.component';
import { NewCustomerInfoComponent } from './new-customer-info/new-customer-info.component';
import { UpdateNewCustomerComponent } from './update-new-customer/update-new-customer.component';
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
import {HttpClientModule} from'@angular/common/http';
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
import { ViewProductFeesComponent } from './view-product-fees/view-product-fees.component';
import { AddProductFeesComponent } from './add-product-fees/add-product-fees.component';
import { AddOtherServicesComponent } from './add-other-services/add-other-services.component';
import { ViewOtherServicesComponent } from './view-other-services/view-other-services.component';
import { ViewCourierComponent } from './view-courier/view-courier.component';
import { AddCourierComponent } from './add-courier/add-courier.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddNewsAlertComponent } from './add-news-alert/add-news-alert.component';
import { ViewNewsAlertComponent } from './view-news-alert/view-news-alert.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AccountopeningFormComponent } from './accountopening-form/accountopening-form.component';
import { SetComponent } from './set/set.component';
import { LoginComponent } from './login/login.component';
import { ViewBranchComponent } from './view-branch/view-branch.component'
import { AuthInterceptorProviders } from './auth.interceptor';
import{CarouselModule} from 'ngx-bootstrap/carousel'
import { DatePipe } from '@angular/common';
import { ViewCustomerDetailsNewComponent } from './view-customer-details-new/view-customer-details-new.component';
import {DiagramModule} from '@syncfusion/ej2-angular-diagrams';
import { DemoComponent } from './demo/demo.component';
import { ScheduleModule, RecurrenceEditorModule, DayService , WeekService,WorkWeekService,MonthService,MonthAgendaService, DragAndDropService, ResizeService, YearService } from '@syncfusion/ej2-angular-schedule'
// import { GoogleCharts } from 'google-charts';
import{DateTimePickerModule} from '@syncfusion/ej2-angular-calendars'
@NgModule({
  declarations: [
    AppComponent,
    BranchComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe,
    ComplianceComponent,
    DepartmentComponent,
    ProductsComponent,
    ProductfeesComponent,
    OtherservicesComponent,
    CourierdetailsComponent,
    DocumentcategoryComponent,
    
    AddComplianceComponent,
    ViewComplianceComponent,
    EditDocumentCategoryComponent,
    EmployeeComponent,
    NewCustomersComponent,
    AddNewCustomerComponent,
    NewCustomerInfoComponent,
    UpdateNewCustomerComponent,
    ChangePasswordComponent,
    NewsAlertComponent,
    TechSupportComponent,
    AddTicketComponent,
    ViewTechsupportComponent,
    AllInvoicesComponent,
    AllTransactionsComponent,
    AllInteractionsComponent,
    AllComplaintsComponent,
    RMWiseReportComponent,
    AllDailyVisitComponent,
    ViewAddDailyvisitComponent,
    AlldailyleadsComponent,
    ViewAddDailyleadsComponent,
    AllTIDComponent,
    AddTIDComponent,
    TidgenerationComponent,
    AllCustomerListComponent,
    AllComplaintsMainComponent,
    AddCustomerComplaintsMainComponent,
    ViewCustomerComplaintsMainComponent,
    UserRolePermissionComponent,
    TaskAppointmentComponent,
    TaskAppointmentDemoComponent,
    DashboardComponent,
    AddNewUserroleComponent,
    ViewCustomerDetailsComponent,
    AddBranchComponent,
    AddDepartmentComponent,
    ViewDepartmentComponent,
    AddProductComponent,
    ViewProductComponent,
    ViewProductFeesComponent,
    AddProductFeesComponent,
    AddOtherServicesComponent,
    ViewOtherServicesComponent,
    ViewCourierComponent,
    AddCourierComponent,
    AddEmployeeComponent,
    AddNewsAlertComponent,
    ViewNewsAlertComponent,
    UserProfileComponent,
    AccountopeningFormComponent,
    SetComponent,
    LoginComponent,
    ViewBranchComponent,
    ViewCustomerDetailsNewComponent,
    DemoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,HttpClientModule,
    CarouselModule.forRoot(),
    DiagramModule,
    ScheduleModule, RecurrenceEditorModule,
    DateTimePickerModule
    // NgbModule.forRoot()
  ],
  providers: [AuthInterceptorProviders,DatePipe ,DayService , WeekService,WorkWeekService, MonthService,MonthAgendaService, DragAndDropService, ResizeService,YearService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
