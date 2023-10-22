import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
// array to receieve data from api
products:any []=[]
categories:any[]=[]
cartProduct:any[]=[]
loading :boolean=false;
constructor( private service:ProductsService){}
  ngOnInit():void {
    this.getProducts();
    this.getCategories();
  }
  getProducts(){
 
    this.service.getAllproducts().subscribe((res:any)=>{
      this.products=res;
     
  })  
   }
  // console.log(res);      
  
  

  getCategories(){
    this.loading=true;
    this.service.getAllCategories().subscribe((res:any)=>{
      this.categories=res;
      this.loading=false;

  // console.log(res);      
    })
  }
  filterCategory(event:any){
    let value=event.target.value;
    (value=="all") ? this.getProducts() : this.getProductCategory(value);
  }

  getProductCategory(keyword:string){
    this.loading=true;
    this.service.getProductsByCategory(keyword).subscribe ( (res:any) =>{
        this.products=res;
        this.loading=false;

    }
      )}


  addToCart(event:any){
    if ( "cart" in localStorage){
      this.cartProduct=JSON.parse(localStorage.getItem("cart")!)
      let exist =this.cartProduct.find(item => item.item.id == event.item.id);
      if(exist){
        alert('this product already in the cart')
      }else{
        this.cartProduct.push(event)
        localStorage.setItem("cart",JSON.stringify(this.cartProduct))
      }
      
    }else{
      this.cartProduct.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cartProduct))
    }

  }
}
