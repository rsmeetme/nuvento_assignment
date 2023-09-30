import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CanLoadAuthGuard implements CanLoad {

constructor(private router:Router){}
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    let islogin:any = localStorage.getItem('isLogin');
    if (islogin) {
      return true; // Allow loading the module
    } else {
      this.router.navigate(['/'])
      return false; // Prevent loading the module
    }
  }
}
