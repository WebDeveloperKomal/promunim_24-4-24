import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TidService {
  setTid(newTid: string) {
    throw new Error('Method not implemented.');
  }
  private tidSource = new BehaviorSubject<string>('');
  currentTid = this.tidSource.asObservable();

  updateTid(tid: string) {
    this.tidSource.next(tid);
  }
}
