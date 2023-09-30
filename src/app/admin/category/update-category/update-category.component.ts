import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { updateCategory } from 'src/app/store/category/category.action';
import { getCategories } from 'src/app/store/category/category.selector';
import { AppStateModel } from 'src/app/store/globel/app.state.model';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  updateCategoryForm: FormGroup;
  categories!:any;
  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppStateModel>, private route:ActivatedRoute) {
    this.updateCategoryForm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      parentId: [null, Validators.required]
    });
  }
  ngOnInit(): void {
    this.store.select(getCategories).subscribe((categories: any) => {
      this.categories = categories;
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        const category: any = Array.from(categories).filter((p: any) => p.id == id);
        console.log(category);
        this.updateCategoryForm.patchValue({
          id: [id],
          name: category[0].name,
          parentId: category[0].parentId
        })
      });
    })
  }

  onSubmit() {
    console.log(this.updateCategoryForm.value);
    this.store.dispatch(updateCategory({ updateCategory: this.updateCategoryForm.value }))
    this.router.navigate(['categories']);

  }

  onChange(e: any) {
    let selectBox: any = document.getElementById("parentCategoryId");
    let selectedValue = selectBox.value;
    this.updateCategoryForm.patchValue({
      parentId: selectedValue
    })
  }

}
