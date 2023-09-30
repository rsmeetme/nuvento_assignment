import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getAttributes } from 'src/app/store/attribute/attribute.selector';
import { getCategories } from 'src/app/store/category/category.selector';
import { AppStateModel } from 'src/app/store/globel/app.state.model';
import { addProduct } from 'src/app/store/products/product.action';
import { getProducts } from 'src/app/store/products/product.selector';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;
  addAttributeIdForm: FormGroup;
  categories!: any;
  attributes!:any;
  selectedAttributes:any=[];
  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppStateModel>) {
    this.addProductForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: [0, Validators.required],
      attributes: [[], Validators.required],
    });
    this.store.select(getCategories).subscribe(res => {
      this.categories = res;
    })
    this.store.select(getAttributes).subscribe(res => {
      this.attributes = res;
    })
    this.addAttributeIdForm = this.fb.group({
      attrIds: ['Select', Validators.required]
    });
  }

  ngOnInit(): void {
    this.store.select(getProducts).subscribe(p => {
      this.addProductForm.patchValue({
        id: (p.length + 1)
      })
    })
  }

  onChange(e: any) {
    let selectBox: any = document.getElementById("categories");
    let selectedValue = selectBox.value;
    this.addProductForm.patchValue({
      categoryId: selectedValue
    })
  }

  // onAttributeChange(){
  //   let selectBox: any = document.getElementById("attributeid");
  //   let selectedValue = selectBox.value;
  //   this.addProductForm.patchValue({
  //     categoryId: selectedValue
  //   })
  // }

  onSubmit() {
    console.log(this.addProductForm.value);
    this.store.dispatch(addProduct({ addProduct: this.addProductForm.value }))
    this.resetForm();
    // if (this.addProductForm.valid) {
    //   console.log(this.addProductForm.value);
    //   this.store.dispatch(addProduct({ addProduct: this.addProductForm.value }))
    // }
  }

  onNestedSubmit() {
    if (this.addAttributeIdForm.valid) {
      const _attrId = this.addAttributeIdForm.value.attrIds;
      const singleAttr = Array.from(this.attributes).filter((a:any)=>a.id==_attrId)
      this.selectedAttributes = [...this.selectedAttributes, singleAttr[0]]
      console.log(this.selectedAttributes);
      this.updateFormValue(this.selectedAttributes);
      this.addAttributeIdForm.reset();
    } else {
      console.log('error');
    }
  }

  onRemoveAttr(id:any){
    this.selectedAttributes = Array.from(this.selectedAttributes).filter((a:any)=>a.id!=id);
    this.updateFormValue(this.selectedAttributes);
    console.log(this.selectedAttributes);
  }

  updateFormValue(arr: any) {
    this.addProductForm.patchValue({
      attributes: arr
    });
  }

  resetForm() {
    this.addProductForm.reset();
    this.ngOnInit();
    this.selectedAttributes=[];
    let selectBox: any = document.getElementById("categories");
    selectBox.value = 0;
  }
}
