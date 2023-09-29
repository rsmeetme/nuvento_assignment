import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';

const routes: Routes = [
  {
    path:'',
    component:CategoryListComponent
  },
  {
    path:'add-category',
    component:AddCategoryComponent
  },
  {
    path:'update-category/:id',
    component:UpdateCategoryComponent
  },
  {
    path:'delete-category/:id',
    component:DeleteCategoryComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
