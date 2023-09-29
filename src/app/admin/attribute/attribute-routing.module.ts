import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeListComponent } from './attribute-list/attribute-list.component';
import { AddAttributeComponent } from './add-attribute/add-attribute.component';
import { UpdateAttributeComponent } from './update-attribute/update-attribute.component';
import { DeleteAttributeComponent } from './delete-attribute/delete-attribute.component';

const routes: Routes = [
  {
    path:'',
    component:AttributeListComponent
  },
  {
    path:'add-attribute',
    component:AddAttributeComponent
  },
  {
    path:'update-attribute/:id',
    component:UpdateAttributeComponent
  },
  {
    path:'delete-attribute/:id',
    component:DeleteAttributeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttributeRoutingModule { }
