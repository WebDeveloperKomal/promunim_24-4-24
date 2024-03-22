import { Component, EventEmitter, Output } from '@angular/core';
import { SidenavtoggleService } from '../Shared/sidenavtoggle.service';
import { SecurityService } from '../security.service';
import { Router } from '@angular/router';
import { EmployeeModel } from '../employee/employee.component.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus : boolean = false;
  isLoggedin:boolean | undefined;
  user:EmployeeModel = new EmployeeModel();

  constructor(private sharedService: SidenavtoggleService, private securityService: SecurityService, private router:Router){}

  ngOnInit(){
    this.isLoggedin= this.securityService.IsLoggedIn();
    this.securityService.getUserData().subscribe(
      (responce:any)=>{
        this.user= responce.data
      },
      (error:any)=>{
        console.error(error);        
      }
    )
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "You Are LoggedOut!"
    }); 
  }
  isFeesDropdownVisible: boolean = false;
  toggleFeesDropdown() {
    this.isFeesDropdownVisible = !this.isFeesDropdownVisible;
  }

  isOpen: boolean = false;
  private sidebarVisible = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }



  // showhidesidenav() {
  //   this.sharedService.toggleSidebar();
   
  // }
  sideNavToggle(){
this.menuStatus = !this.menuStatus;
this.sideNavToggled.emit(this.menuStatus)
  }
  
  // toggleSidenav() {
  //   this.toggleSidenavEvent.emit();
  // }

  // closeSidebar() {
  //   this.isOpen = false;
  // }

  toggleSideNav() {
    this.sharedService.toggleSideNav();
  }
}
