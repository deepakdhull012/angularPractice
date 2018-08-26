import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardChildService implements CanActivateChild{
  constructor(
    private router: Router
  ){

  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    if(localStorage.getItem("currentUser") !== "null"){
      return true;
    }
    this.router.navigate(['./login']);
    return false;
  }
}
