import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { AttributeModule } from './attribute/attribute.module';
import { ButtonModule } from 'primeng/button';
import { LayoutComponent } from './layout/layout.component';
import { MenuModule } from 'primeng/menu';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ProductModule,
    CategoryModule,
    AttributeModule,
    ButtonModule,
    MenuModule
  ]
})
export class AdminModule { }
