import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  @Input() data:any={}
  @Output() item = new EventEmitter();
  addButton:boolean=false;
  amount:number=0;
  constructor(){}
  
  ngOnInit(){}
  
  add(){
  this.item.emit({item:this.data , quantity:this.amount})
  }
  }
  
