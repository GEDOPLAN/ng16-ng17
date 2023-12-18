import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private static counter = 0 ;

  serviceNumber:number;

  constructor() {
    MyService.counter++;
    this.serviceNumber = MyService.counter;
  }
}
