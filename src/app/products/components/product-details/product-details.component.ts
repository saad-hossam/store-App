import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {


  selected_product_id: any ;
   data: any={}
  constructor(private router: ActivatedRoute,private service:ProductsService ) {
    this.selected_product_id = this.router.snapshot.params["id"];
    console.log(this.selected_product_id);
  }

  ngOnInit() {
   this.getProduct()
  }
  getProduct(){
    this.service.getProductsById(this.selected_product_id).subscribe((res:any)=>{
      this.data=res;
      console.log(this.data)
  }
)}
 
}
