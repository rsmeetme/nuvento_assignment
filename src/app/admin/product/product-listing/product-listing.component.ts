import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { getProducts } from 'src/app/store/products/product.selector';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { deleteProduct } from 'src/app/store/products/product.action';
import { AppStateModel } from 'src/app/store/globel/app.state.model';
import { getCategories } from 'src/app/store/category/category.selector';


@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  products!: any;
  cachedProduct!: any;
  categories!: any;
  constructor(private store: Store<AppStateModel>, private router: Router) { }
  ngOnInit(): void {
    this.store.select(getProducts).subscribe((res) => {
      console.log(res);
      this.products = res;
      this.cachedProduct = res;
    });
    this.store.select(getCategories).subscribe(res => {
      this.categories = res;
    })
  }
  onChange(e: any) {
    let selectBox: any = document.getElementById("categories");
    let selectedValue = selectBox.value;
    // console.log(selectedValue);
    let products = this.cachedProduct;
    if (selectedValue == 0) {
      this.products = products;
    } else {
      debugger;
      this.products = Array.from(products).filter((c: any) => c.categoryId == selectedValue)
      console.log(this.products);
    }
  }

  onAddButtonClick() {
    this.router.navigate(['add-product']);
  }

  onUpdateButtonClick(productId: number) {
    this.router.navigate(['update-product', productId]);
  }

  onDeleteButtonClick(productId: number) {
    this.store.dispatch(deleteProduct({ productId: productId }))
  }

}
