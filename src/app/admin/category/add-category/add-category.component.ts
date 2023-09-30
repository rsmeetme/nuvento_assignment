import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addCategory } from 'src/app/store/category/category.action';
import { getCategories } from 'src/app/store/category/category.selector';
import { AppStateModel } from 'src/app/store/globel/app.state.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  addCategoryForm: FormGroup;
  categories!:any;
  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppStateModel>) {
    this.addCategoryForm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      parentId: [null, Validators.required]
    });
  }
  ngOnInit(): void {
    this.store.select(getCategories).subscribe(categories => {
      this.categories = categories
      this.addCategoryForm.patchValue({
        id: (categories.length + 1)
      })
    })
  }

  onSubmit() {
    console.log(this.addCategoryForm.value);
    this.store.dispatch(addCategory({ addCategory: this.addCategoryForm.value }))
    this.resetForm();

  }

  onChange(e: any) {
    let selectBox: any = document.getElementById("parentCategoryId");
    let selectedValue = selectBox.value;
    this.addCategoryForm.patchValue({
      parentId: selectedValue
    })
  }

  resetForm() {
    this.addCategoryForm.reset();
    this.ngOnInit();
  }

}
