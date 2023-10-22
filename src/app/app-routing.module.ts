import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
  {path: 'register',component: RegisterComponent},
  {path: 'login',component: LoginComponent},
  {path:"products",component:AllProductsComponent},
  {path:"details/:id",component:ProductDetailsComponent},
  {path:"carts",component:CartComponent},
  {path:"**",redirectTo:"products",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
