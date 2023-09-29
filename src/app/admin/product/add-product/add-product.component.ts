import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
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
  categories!: any;
  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppStateModel>) {
    this.addProductForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: [0, Validators.required],
      attributes: ['', Validators.required],
    });
    this.categories = [
      { id: 0, name: 'All Categories', code: 'NY' },
      { id: 1, name: 'Category 1', code: 'NY' },
      { id: 2, name: 'Category 2', code: 'RM' },
      { id: 3, name: 'Category 3', code: 'LDN' }
    ];
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

  onSubmit() {
    console.log(this.addProductForm.value);
    this.store.dispatch(addProduct({ addProduct: this.addProductForm.value }))
    this.resetForm();
    // if (this.addProductForm.valid) {
    //   console.log(this.addProductForm.value);
    //   this.store.dispatch(addProduct({ addProduct: this.addProductForm.value }))
    // }
  }

  resetForm() {
    this.addProductForm.reset();
    this.ngOnInit();
    let selectBox: any = document.getElementById("categories");
    selectBox.value = 0;
  }
}
