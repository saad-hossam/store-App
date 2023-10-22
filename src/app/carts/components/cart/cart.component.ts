import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {


  constructor(){}
  @Input() cartProduct:any ;

 
  total :any=0;

ngOnInit():void{
  this.getCartProducts()

}
getCartProducts(){
if ( "cart" in localStorage){
  this.cartProduct = JSON.parse(localStorage.getItem("cart")!);
}
this.getCartTotal()
  // console.log('this.cartProduc',this.cartProduct)
}
getCartTotal(){
  this.total=0;
  for(let x in this.cartProduct)
  {
    this.total += this.cartProduct[x].item.price *  this.cartProduct[x].quantity;
  }
}
addAmount(index:number){
this.cartProduct[index].quantity++;
localStorage.setItem("cart",JSON.stringify(this.cartProduct))

this.getCartTotal()

}
minsAmount(index:number){
  this.cartProduct[index].quantity--;
  localStorage.setItem("cart",JSON.stringify(this.cartProduct))
  this.getCartTotal()

  }
detectChanges(){
  this.getCartTotal()

    localStorage.setItem("cart",JSON.stringify(this.cartProduct))

  }
  deleteProduct(index:number){
    this.cartProduct.splice(index,1);
    this.getCartTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartProduct))

  }
  clearCart(){
    this.cartProduct=[]
    this.getCartTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartProduct))
  }
}
