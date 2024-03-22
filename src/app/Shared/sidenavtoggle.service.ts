import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SidenavtoggleService {

  constructor() { }
  // private sidebarVisible = false;

  // toggleSidebar() {
  //   this.sidebarVisible = !this.sidebarVisible;
  // }

  // isSidebarVisible() {
  //   return this.sidebarVisible;
  // }

  private sideNavState = new BehaviorSubject<boolean>(true);
  currentSideNavState = this.sideNavState.asObservable();

  toggleSideNav() {
    this.sideNavState.next(!this.sideNavState.value);
  }
}
