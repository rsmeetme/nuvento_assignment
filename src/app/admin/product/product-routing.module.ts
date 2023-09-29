import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {
    path:'',
    component:ProductListingComponent
  },
  {
    path:'add-product',
    component:AddProductComponent
  },
  {
    path:'update-product/:id',
    component:UpdateProductComponent
  },
  {
    path:'delete-product/:id',
    component:ProductListingComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
