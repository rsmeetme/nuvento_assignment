import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributeRoutingModule } from './attribute-routing.module';
import { AttributeListComponent } from './attribute-list/attribute-list.component';
import { AddAttributeComponent } from './add-attribute/add-attribute.component';
import { UpdateAttributeComponent } from './update-attribute/update-attribute.component';
import { DeleteAttributeComponent } from './delete-attribute/delete-attribute.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { ChipModule } from 'primeng/chip';


@NgModule({
  declarations: [
    AttributeListComponent,
    AddAttributeComponent,
    UpdateAttributeComponent,
    DeleteAttributeComponent
  ],
  imports: [
    CommonModule,
    AttributeRoutingModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ReactiveFormsModule,
    ChipModule
  ]
})
export class AttributeModule { }
