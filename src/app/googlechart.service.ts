import { Injectable } from '@angular/core';
declare var google: any;
@Injectable({
  providedIn: 'root'
})
export class GooglechartService {

  constructor() { }

  loadGoogleCharts(): Promise<void> {
    return new Promise((resolve, reject) => {
      google.charts.load('current', { 'packages': ['orgchart'] });
      google.charts.setOnLoadCallback(() => resolve());
    });
  }
}
