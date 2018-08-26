import { Injectable } from '@angular/core';
import {  CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadGuardService implements CanLoad{
  constructor(
    private router: Router
  ){

  }


  canLoad(route:Route){
    console.log('load guard gets called');
    if(localStorage.getItem("currentUser") !== "null"){
      return true;
    }
    this.router.navigate(['./login']);
    return false;
  }
}
