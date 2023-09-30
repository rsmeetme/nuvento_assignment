import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AttributeModel } from 'src/app/models/attribute.model';
import { updateAttribute } from 'src/app/store/attribute/attribute.action';
import { getAttributes } from 'src/app/store/attribute/attribute.selector';
import { AppStateModel } from 'src/app/store/globel/app.state.model';

@Component({
  selector: 'app-update-attribute',
  templateUrl: './update-attribute.component.html',
  styleUrls: ['./update-attribute.component.css']
})
export class UpdateAttributeComponent implements OnInit {
  updateAttributeForm!: FormGroup;
  updateValueForm!: FormGroup;
  attributes!: any;
  attributeValues: any = [];
  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppStateModel>, private route: ActivatedRoute) {
    this.updateAttributeForm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      values: [[], Validators.required]
    });
    this.updateValueForm = this.fb.group({
      attrvalue: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.store.select(getAttributes).subscribe((attributes: AttributeModel[]) => {
      this.attributes = attributes
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        const attrbute: any = Array.from(attributes).filter((a: any) => a.id == id);
        this.attributeValues = attrbute[0].values;
        this.updateAttributeForm.patchValue({
          id: id,
          name:attrbute[0].name,
          values:attrbute[0].values
        })
      });
    })
  }

  onSubmit() {
    console.log(this.updateAttributeForm.value);
    if (this.updateAttributeForm.valid) {
      this.store.dispatch(updateAttribute({ updateAttribute: this.updateAttributeForm.value }));
      this.attributeValues = [];
      this.updateAttributeForm.reset();
      this.ngOnInit();
      this.router.navigate(['attributes']);
    }
  }

  onNestedSubmit() {
    if (this.updateValueForm.valid) {
      this.attributeValues = [...this.attributeValues, this.updateValueForm.value.attrvalue]
      this.updateFormValue(this.attributeValues);
      this.updateValueForm.reset();
    } else {
      console.log('error');
    }
  }

  removeChip(id: any) {
    console.log(id)
    this.attributeValues = this.attributeValues.filter((item:any, i:any) => {
      return i !== id;
    })
    this.updateFormValue(this.attributeValues);
  }

  updateFormValue(arr: any) {
    this.updateAttributeForm.patchValue({
      values: arr
    });
  }
}