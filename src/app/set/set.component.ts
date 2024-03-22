import { Component } from '@angular/core';
import { AuthiServiceService } from '../authi-service.service';
import {NavigationEnd, Router, Event  } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent {
  sidenavCollapsed: boolean = false;
  toggleSidenav() {           
    // Update the width based on the current width
    // this.sidenavWidth = this.sidenavWidth === '45px' ? '230px' : '45px';
    // this.togglewidth = this.togglewidth === '80px' ? '442px' : '80px';
    // this.toggleSubmenu = this.toggleSubmenu === '230px' ? '0px' : '230px'
    this.sidenavCollapsed = !this.sidenavCollapsed;
    // this.closeAllDropdowns();
  }
  constructor(private serv : AuthiServiceService, private router : Router) { }
  ngOnInit() {
    // if(!this.serv.isauthenticated){
    //   this.router.navigate(["set/"])
    // }

    // this.router.events.pipe(
    //   filter((event) => event instanceof NavigationEnd)
    // ).subscribe((event: NavigationEnd) => {
    //    const currentRoute = event.urlAfterRedirects;
    //   console.log('Current Route:', currentRoute);
    // });

  }
}
