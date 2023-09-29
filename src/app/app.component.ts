import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProducts } from './store/products/product.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assignment';
  constructor(private store:Store){

  }

  ngOnInit(): void {
    // this.store.select(getProducts).subscribe(res=>{
    //   console.log(res);
    // })
  }
}
