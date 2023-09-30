import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addAttribute } from 'src/app/store/attribute/attribute.action';
import { getAttributes } from 'src/app/store/attribute/attribute.selector';
import { AppStateModel } from 'src/app/store/globel/app.state.model';

@Component({
  selector: 'app-add-attribute',
  templateUrl: './add-attribute.component.html',
  styleUrls: ['./add-attribute.component.css']
})
export class AddAttributeComponent implements OnInit {
  addAttributeForm!: FormGroup;
  addValueForm!: FormGroup;
  attributes!: any;
  attributeValues: any[] = [];
  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppStateModel>) {
    this.addAttributeForm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      values: [[], Validators.required]
    });
    this.addValueForm = this.fb.group({
      attrvalue: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.store.select(getAttributes).subscribe(attributes => {
      this.attributes = attributes
      this.addAttributeForm.patchValue({
        id: (attributes.length + 1)
      })
    })
  }

  onSubmit() {
    console.log(this.addAttributeForm.value);
    if (this.addAttributeForm.valid) {
      this.store.dispatch(addAttribute({ addAttribute: this.addAttributeForm.value }));
      this.attributeValues = [];
      this.addAttributeForm.reset();
      this.ngOnInit();
    }
  }

  onNestedSubmit() {
    if (this.addValueForm.valid) {
      this.attributeValues = [...this.attributeValues, this.addValueForm.value.attrvalue]
      this.updateFormValue(this.attributeValues);
      this.addValueForm.reset();
    } else {
      console.log('error');
    }
  }

  removeChip(id: any) {
    console.log(id)
    this.attributeValues = this.attributeValues.filter((item, i) => {
      return i !== id;
    })
    this.updateFormValue(this.attributeValues);
  }

  updateFormValue(arr: any) {
    this.addAttributeForm.patchValue({
      values: arr
    });
  }
}
