import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getAttributes } from 'src/app/store/attribute/attribute.selector';
import { getCategories } from 'src/app/store/category/category.selector';
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
  addAttributeIdForm!: FormGroup;
  categories!: any;
  attributes!:any;
  selectedAttributes:any=[];
  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppStateModel>, private route: ActivatedRoute) {
    this.updateProductForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: [0, Validators.required],
      attributes: ['', Validators.required],
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
          attributes: product[0].attributes,
        })
        this.updateCategoryControl(product[0].categoryId);
        this.selectedAttributes = product[0].attributes;
        this.addAttributeIdForm.patchValue({
          attrIds: this.selectedAttributes,
        })
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
    this.updateProductForm.patchValue({
      attributes: arr
    });
  }

  updateCategoryControl(val: number) {
    let selectBox: any = document.getElementById("categories");
    selectBox.selectedIndex = val;
  }
}
