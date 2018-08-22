import { Directive,ElementRef,Input,HostListener,AfterViewInit } from "@angular/core";
import { Observable,fromEvent } from 'rxjs';
import { map, throttleTime, debounceTime,pairwise } from 'rxjs/Operators';
import {  UserService } from './../services/user.service';
import { Store } from '@ngrx/store';



@Directive({
    selector : '[scrollDir]',
})
export class ScrollDir{
    @Input('scrollPercentage') scrollPer;
    private scrollEvent$;
    private userScrolledDown$;
    private requestStream$;
    private requestOnScroll$;

    private scrollHt;
    private scrollTop;
    private clientHt;
    private callInProgress = false;

    constructor(
        private el:ElementRef,
        private userService : UserService,
        private _store: Store<any>
    ){
        
    }
    ngAfterViewInit(){
        this.registerScrollEvent();
        this.streamScrollEvents();
        this.requestCallbackOnScroll();
    }

    private registerScrollEvent() {
        this.scrollEvent$ = fromEvent(this.el.nativeElement, 'scroll');
      }

      private streamScrollEvents() {
        this.userScrolledDown$ = this.scrollEvent$.pipe(map((e:any)=>{
            e.scrollHt = e.target.scrollHeight;
            e.scrollTop = e.target.scrollTop;
            e.clientHt = e.target.clientHeight;

            return e;
        }),
        pairwise(),
        debounceTime(500)
    );

        
      }

      requestCallbackOnScroll(){
          this.userScrolledDown$.subscribe((e)=>{
              let scrolledPer = ((e[1].scrollTop+e[1].clientHt)/e[1].scrollHt)*100;
              console.log(e,scrolledPer)
              if(scrolledPer >= this.scrollPer && this.isUserScrollingDown(e) && !this.callInProgress){
                  this.callInProgress = true;
                 this.userService.getUsers().then((users)=>{
                     console.log('res received',users)
                    this._store.dispatch({
                        type: 'FETCH_USERS',
                        payload: users
                      });
                      this.callInProgress = false;
                 })
              }
          })
      }

      isUserScrollingDown(ePair){
        if(ePair[1].scrollTop > ePair[0].scrollTop){
            return true;
        }
        else{
            return false;
        }
      }
}