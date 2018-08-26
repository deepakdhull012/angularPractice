import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable,of } from "rxjs";



@Injectable()
export class QuestionDetailResolverGuard implements Resolve<any>{
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>{
    let id = route.paramMap.get('id');
    console.log(id);
    let obj = {};
    return of(obj);
  }

}
