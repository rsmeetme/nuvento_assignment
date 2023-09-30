import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AttributeModel } from 'src/app/models/attribute.model';
import { deleteAttribute } from 'src/app/store/attribute/attribute.action';
import { getAttributes } from 'src/app/store/attribute/attribute.selector';
import { AppStateModel } from 'src/app/store/globel/app.state.model';

@Component({
  selector: 'app-attribute-list',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['./attribute-list.component.css']
})
export class AttributeListComponent implements OnInit {
  attributes!: any;
  constructor(private store: Store<AppStateModel>, private router: Router) { }
  ngOnInit(): void {
    this.store.select(getAttributes).subscribe((attributes: AttributeModel[]) => {
      console.log(attributes);
      this.attributes = attributes;
    })
  }

  getValuesInString(val:string[]){
    return val.join();
  }


  onAddButtonClick() {
    this.router.navigate(['attributes/add-attribute']);
  }

  onUpdateButtonClick(attributeId: number) {
    this.router.navigate(['attributes/update-attribute', attributeId]);
  }

  onDeleteButtonClick(attributeId: number) {
    this.store.dispatch(deleteAttribute({attributeId:attributeId}))
  }
}
