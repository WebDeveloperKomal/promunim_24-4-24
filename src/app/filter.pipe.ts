import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  // transform(items: any[], searchTerm: string): any[] {
  //   if (!items) {
  //     return [];
  //   }
  //   if (!searchTerm) {
  //     return items;
  //   }
  //   searchTerm = searchTerm.toLowerCase();

  //   return items.filter(item => {
      
  //     return item.name.toLowerCase().includes(searchTerm);
  //   });
  // }

  transform(value: any, args?: any): any {
    // if(!value) return null;
    // if(!args) return value;
    // args = args.toLowerCase();
    // return value.filter((item : any)=>{
    //   return JSON.stringify(item).toLowerCase().includes(args);
    // })

  }


}
