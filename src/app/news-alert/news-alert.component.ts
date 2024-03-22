import { Component } from '@angular/core';
import { NewsalertModel } from './news-alert.component.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news-alert',
  templateUrl: './news-alert.component.html',
  styleUrls: ['./news-alert.component.css']
})
export class NewsAlertComponent {
  SearchText: any;
  page = 1;
  pageSize = 10;
  dataarray: NewsalertModel[] = [];
  currentPage: number = 1;
  countries: NewsalertModel[] | undefined;
  collectionSize = 100;
  NewsAlertList: NewsalertModel[] = [];
  originalNewsAlertList : NewsalertModel[] = [] ;
  permissions: any;
  Perstring:any;
  insertalert!:boolean;
  deletealert!:boolean;
  updatealert!:boolean;
  view!:boolean;
  viewRM!:boolean;
  viewbranch!:boolean;
  viewall!:boolean;

  constructor(private api: ApiService , private router: Router) {

  }

  ngOnInit() {
    this.Perstring = localStorage.getItem('permissions');
    if (this.Perstring) {
      this.permissions = JSON.parse(this.Perstring);
      this.permissions.forEach((permission: number) => {
        if (permission === 1196){this.insertalert = true};
        if (permission === 1197){this.deletealert = true};
        if (permission === 1198){this.updatealert = true};
        if (permission === 1199){this.view = true};
        if (permission === 1200){this.viewRM = true};
        if (permission === 1201){this.viewbranch = true};
        if (permission === 1202){this.viewall = true};
      });
    } else {
      console.log('No permissions data found.');
    };

    this.api.allNewsAlert().subscribe(
      (data: any) => {
        this.originalNewsAlertList = data.data;
        this.NewsAlertList = this.originalNewsAlertList ;
        console.log('Response successful!',data.data);
        this.collectionSize = data.data.length;
      },
      (error: any) => {
        console.error('API Error:', error);
      }
    )
  }

  edit(id:number){
    this.router.navigate(['/set/view-news-alert/'+id]);
  }


  delete(newsAlertId: number){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
      }).then((result) => {
      if (result.isConfirmed) 
      {
        this.api.deleteNewsAlert(newsAlertId).subscribe(
              (response: any) => {
                console.log(response.data);
                // window.location.reload();
              },
          (error:any)=>{
            console.error(error);
            Swal.fire({
              title: "Error!",
              icon: "error"
            });
          }
        );
        // setInterval(()=>{window.location.reload()},1000);        
      }
    });
    
  }

  applyFilter(): void {
    const searchString = this.SearchText.toLowerCase();
    // const filteredData = [...this.NewsAlertList];
    this.NewsAlertList = this.originalNewsAlertList.filter((data) =>
      // (data.date !== null && !isNaN(data.date) && data.date.toString().includes(searchString)) ||
      data.subject.toLowerCase().includes(searchString) ||
      data.description.toLowerCase().includes(searchString) 
      
    );
  }
  refreshCountries() {
    this.countries = this.dataarray
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
