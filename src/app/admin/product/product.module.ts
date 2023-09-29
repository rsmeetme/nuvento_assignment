import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';
import { ButtonModule } from 'primeng/button';
// import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    ProductListingComponent,
    AddProductComponent,
    UpdateProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    TableModule,
    TreeTableModule,
    ButtonModule,
    // DropdownModule,
    ReactiveFormsModule,
    InputTextModule
  ]
})
export class ProductModule { }
