import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
@Input()  cartProduct:any ;

  constructor() { }
}
