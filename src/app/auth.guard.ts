import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from './security.service';
import { Injectable } from '@angular/core';
import { UserModel } from './user-profile/userModel';
import { ApiService } from './api.service';
import { PermissionsModel } from './login/permissionsModel';

@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate {
  user:UserModel= new UserModel();
  PermissionsData:PermissionsModel[]=[];
  permissions:number[]=[];

  constructor(private service:SecurityService, private apiService:ApiService , private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      
      if(this.service.IsLoggedIn())
      {
        this.service.getUserData().subscribe(
          (response:any)=>{
            this.user = response.data;
            localStorage.setItem('roleId',this.user.roleId);                       
            this.apiService.permissionsByRoleId(this.user.roleId).subscribe(
              (response:any)=>{
                this.PermissionsData = response.data;
                this.permissions = this.PermissionsData.map(permissionType => permissionType.rolePermissionTypeId);
                // console.log('permissions ::::::::::::::::::: ', this.permissions);                
                localStorage.setItem('permissions',JSON.stringify(this.permissions));
              },
              (error:any)=>{
                this.router.navigate(['']);
                console.error(error);
              }
            );
          },
          (error:any)=>{
            console.error(error);
          }
        );
        return true;
      }
      else
      {
        this.router.navigate([''])
        return false;
      } 
  }
};