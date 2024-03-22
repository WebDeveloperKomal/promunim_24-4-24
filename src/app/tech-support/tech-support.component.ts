import { Component } from '@angular/core';
import { TechSupportModel } from './tech-support.component.model';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tech-support',
  templateUrl: './tech-support.component.html',
  styleUrls: ['./tech-support.component.css']
})
export class TechSupportComponent {
  SearchText : any ;

  page = 1;
  pageSize = 10 ;
  dataarray: TechSupportModel[] = [];
  currentPage: number = 1;
  countries: TechSupportModel[] | undefined;
  collectionSize =100;
  id!:number;
  techSupportList:TechSupportModel[] = [];
  originaltechSupportList : TechSupportModel[] = [] ;

    
  permissions: any;
  Perstring:any;
  insertticket!:boolean;
  deleteticket!:boolean;
  updateticket!:boolean;
  view!:boolean;
  viewRM!:boolean;
  viewbranch!:boolean;
  viewall!:boolean;

  constructor(private formBuilder: FormBuilder , private api : ApiService , private router:Router) {
  
}

edit(id:any){
  this.router.navigate(['/set/view-techsupport/'+id]);
}

ngOnInit(){
  this.Perstring = localStorage.getItem('permissions');
  if (this.Perstring) {
    this.permissions = JSON.parse(this.Perstring);
    this.permissions.forEach((permission: number) => {
      if (permission === 1056){this.insertticket = true};
      if (permission === 1057){this.deleteticket = true};
      if (permission === 1058){this.updateticket = true};
      if (permission === 1059){this.view = true};
      if (permission === 1060){this.viewRM = true};
      if (permission === 1061){this.viewbranch = true};
      if (permission === 1062){this.viewall = true};
    });
  } else {
    console.log('No permissions data found.');
  };

  this.api.allTechSupport().subscribe(
    ( data: any) => {
     this.originaltechSupportList=data.data;
     this.techSupportList = this.originaltechSupportList
      console.log('Response successful!', data.data);
      this.collectionSize = data.data.length;
    },
    (error:any) => {
      console.error('API Error:', error);
    }
  );
}


applyFilter(): void {
  const searchString = this.SearchText.toLowerCase();
  // const filteredData = [...this.techSupportList];
  this.techSupportList = this.originaltechSupportList.filter((data) =>
  // (data.date !== null && !isNaN(data.date) && data.date.toString().includes(searchString)) ||
  (data.ticketId !== null && !isNaN(data.ticketId) && data.ticketId.toString().includes(searchString)) ||
    data.subject.toLowerCase().includes(searchString) ||
    data.insertBy.toLowerCase().includes(searchString) 
   
  );
}
refreshCountries() {
  // this.countries = this.dataarray
  //   .map((country, i) => ({id: i + 1, ...country}))
  //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}

}
