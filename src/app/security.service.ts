import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  // constructor() { }
  
  credentials!:{email:string,password:string};

  constructor(private http : HttpClient) {}

  baseUrl="https://clientportal.promunim.com/";
  // baseUrl="http://localhost:8181";

  Login(credentials:{email:string,password:string})
  {
    this.credentials=credentials;
    return this.http.post(`${this.baseUrl}/login`,credentials);
  }

  IsLoggedIn()
  {
    let token = localStorage.getItem("token");
    
    if(token==undefined || token==='' || token==null)
    {
      return false;
    }
    else{
      return true;
    }
  }


  getUserData():any{
    return this.http.get(`${this.baseUrl}/user-profile`);
  }


  updateUserProfile(user:any){
    return this.http.put(`${this.baseUrl}/update-user-profile`,user);
  }

  updateUserPassword(password:any){
    return this.http.put(`${this.baseUrl}/update-employee-password`,password);
  }





    
  /************************************** FOR EMPLOYEE COMPONENT ***************************************/


  allEmployees():any
  {
    return this.http.get(`${this.baseUrl}/employee`);
  }


  addEmployee(data: any, empPhoto: File): any {
    const formData = new FormData();
    formData.append('data', JSON.stringify(data));
    formData.append('empPhoto', empPhoto);

    return this.http.post(`${this.baseUrl}/register-new-employee`, formData, {
      // params,
      reportProgress: true, // If you want to track upload progress
    });
  }

  updateEmployee(data: any, empPhoto: File):any {
    const formData: FormData = new FormData();
    formData.append('data', JSON.stringify(data));
    formData.append('empPhoto', empPhoto);

    return this.http.post(`${this.baseUrl}/update-employee`, formData, { reportProgress: true });
  }

  deleteEmployee(id:any){
    return this.http.delete(`${this.baseUrl}/auth/employee/`+id);
  }


    /************************************** FOR EMPLOYEE COMPONENT ***************************************/



    








}
