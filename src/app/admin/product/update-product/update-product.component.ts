import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/store/globel/app.state.model';
import { addProduct, updateProduct } from 'src/app/store/products/product.action';
import { getProducts } from 'src/app/store/products/product.selector';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  updateProductForm: FormGroup;
  categories!: any;
  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppStateModel>, private route: ActivatedRoute) {
    this.updateProductForm = this.fb.group({
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
    this.store.select(getProducts).subscribe((products: any) => {
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        const product: any = Array.from(products).filter((p: any) => p.id == id);
        console.log(product);
        this.updateProductForm.patchValue({
          id: [id],
          name: product[0].name,
          description: product[0].description,
          categoryId: product[0].categoryId,
          attributes: '',
        })
        this.updateCategoryControl(product[0].categoryId)
      });
    })
  }

  onChange(e: any) {
    let selectBox: any = document.getElementById("categories");
    let selectedValue = selectBox.value;
    this.updateProductForm.patchValue({
      categoryId: selectedValue
    })
  }

  onSubmit() {
    console.log(this.updateProductForm.value);
    this.store.dispatch(updateProduct({ updateProduct: this.updateProductForm.value }))
    this.router.navigate(['/admin']);
  }

  updateCategoryControl(val: number) {
    let selectBox: any = document.getElementById("categories");
    selectBox.selectedIndex = val;
  }
}
