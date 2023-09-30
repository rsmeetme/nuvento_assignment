import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CategoryModel } from 'src/app/models/category.model';
import { deleteCategory } from 'src/app/store/category/category.action';
import { getCategories } from 'src/app/store/category/category.selector';
import { AppStateModel } from 'src/app/store/globel/app.state.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories!: any;
  cachedCategories!: any;
  constructor(private store: Store<AppStateModel>, private router: Router) { }
  ngOnInit(): void {
    this.store.select(getCategories).subscribe((categories: CategoryModel[]) => {
      console.log(categories);
      this.categories = categories;
      this.categories = categories;
    });
  }

  onAddButtonClick() {
    this.router.navigate(['categories/add-category']);
  }

  onUpdateButtonClick(categoryId: number) {
    this.router.navigate(['categories/update-category', categoryId]);
  }

  onDeleteButtonClick(categoryId: number) {
    this.store.dispatch(deleteCategory({categoryId:categoryId}))
  }

}
