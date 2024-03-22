import { Component, ElementRef, Input, Renderer2, SecurityContext } from '@angular/core';
import { SidenavtoggleService } from '../Shared/sidenavtoggle.service';
import { SecurityService } from '../security.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  
 @Input() sideNavStatus: boolean = false;
 isFeesDropdownVisible: boolean = false;
 iscustomerServiceVisible: boolean = false;
 isReportDropdownVisible : boolean = false;
 isacknowDropdownVisible : boolean = false ;
 isinsureinvestDropdownVisible : boolean = false;
 ismyaccountDropdown : boolean= false ;
 showSideNav : boolean =false;
 sidenavWidth: string = '230px'; 
 togglewidth : string = '422px'
 toggleSubmenu : string = '0px';
 sidenavCollapsed: boolean = false;
 constructor(private sharedService: SidenavtoggleService,private router:Router,private el: ElementRef, private renderer: Renderer2) {
   this.sharedService.currentSideNavState.subscribe(
     (state) => (this.showSideNav = state)
   );
 }
 activeLink: string | null = null;
 isSubMenuOpen: boolean = false;
 sidenavStatus: boolean =true ;
 setActiveLink(link: string) {
   this.activeLink = link;
   this.isSubMenuOpen = true;
 }
 showsidenavfull(){
   this.sidenavStatus = !this.sidenavStatus
 }
 toggleSidenav() {
   this.sidenavWidth = this.sidenavWidth === '45px' ? '230px' : '45px';
   this.togglewidth = this.togglewidth === '47px' ? '422px' : '47px';
   this.toggleSubmenu = this.toggleSubmenu === '230px' ? '0px' : '230px'
   this.sidenavCollapsed = !this.sidenavCollapsed;
   this.closeAllDropdowns();
 }
ShowSubmenu(){
this.toggleSubmenu = this.toggleSubmenu === '230px' ? '0px' : '230px'
 }
 
 // closeDropdown() {
 //   // Check if the dropdown is visible
 //   const dropdown = this.el.nativeElement.querySelector('.submenu');
 //   if (dropdown.classList.contains('show')) {
 //     // Close the dropdown by removing the 'show' class
 //     this.renderer.removeClass(dropdown, 'show');
 //   }
 // }
 
 closeAllDropdowns() {
   // Query all open dropdowns
   const openDropdowns = this.el.nativeElement.querySelectorAll('.submenu.show');
 
   // Close each open dropdown
   openDropdowns.forEach((dropdown: HTMLElement) => {
     this.renderer.removeClass(dropdown, 'show');
   });
 }
 // ShowSubmenu(){
 //   this.isFeesDropdownVisible = this.isFeesDropdownVisible === '230px' ? '0px' : '230px'
 //     }

 // isActive: boolean = false; // Initially set to false

 // togglemyaccountDropdown() {
 //   this.isActive = !this.isActive;
 //   // Add any additional logic you may need
 // }
 isActiveRoute(route: string): boolean {
   return this.router.isActive(route, true);
 }

 signout(){
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

 
 // @HostListener('mouseenter') onMouseEnter() {
 //   const icon = this.el.nativeElement;
 //   const submenu = icon.nextElementSibling;

 //   if (icon && submenu) {
 //     const iconRect = icon.getBoundingClientRect();
 //     this.renderer.setStyle(submenu, 'left', `${iconRect.right}px`);
 //     this.renderer.setStyle(submenu, 'top', `${iconRect.top}px`);
 //     this.renderer.setStyle(submenu, 'display', 'block');
 //   }
 // }

 // @HostListener('mouseleave') onMouseLeave() {
 //   const submenu = this.el.nativeElement.nextElementSibling;

 //   if (submenu) {
 //     this.renderer.setStyle(submenu, 'display', 'none');
 //   }
 // }


 toggleFeesDropdown() {
   this.isFeesDropdownVisible = !this.isFeesDropdownVisible;
   
 }

 togglecustomerService() {
   this.iscustomerServiceVisible = !this.iscustomerServiceVisible;
 }

 toggleReportDropdown(){
   this.isReportDropdownVisible = !this.isReportDropdownVisible;
 }
 toggleacknowDropdown(){
  this.isacknowDropdownVisible = !this.isacknowDropdownVisible ;
 }

 toggleinsureinvestDropdown(){
this.isinsureinvestDropdownVisible = !this.isinsureinvestDropdownVisible;
}

 togglemyaccountDropdown(){
 this.ismyaccountDropdown = !this.ismyaccountDropdown ;
 }
}
function toggleDropdown(event: any) {
 var dropdownContent = event.target.parentElement.nextElementSibling;
 dropdownContent.classList.toggle("show");
}
