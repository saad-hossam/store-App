import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  @Input()  cartProduct:any []=[];;

  

  constructor() { }
}
