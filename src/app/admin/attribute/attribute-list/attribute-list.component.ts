import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AttributeModel } from 'src/app/models/attribute.model';
import { getAttributes } from 'src/app/store/attribute/attribute.selector';
import { AppStateModel } from 'src/app/store/globel/app.state.model';

@Component({
  selector: 'app-attribute-list',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['./attribute-list.component.css']
})
export class AttributeListComponent implements OnInit {
  attributeList!: AttributeModel[];
  constructor(private store: Store<AppStateModel>) { }
  ngOnInit(): void {
    this.store.select(getAttributes).subscribe((attributes: AttributeModel[]) => {
      console.log(attributes);
      this.attributeList = attributes;
    })
  }
}
