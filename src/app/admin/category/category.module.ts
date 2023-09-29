import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
  declarations: [
    AddCategoryComponent,
    UpdateCategoryComponent,
    DeleteCategoryComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
