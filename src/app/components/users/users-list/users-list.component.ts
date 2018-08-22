import { Component, OnInit } from '@angular/core';
import { UserLogicService } from './../user-logic-service';
import { Store } from '@ngrx/store';
import { ScrollDir } from './../../../directives/scrolldir.directive'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users = [];
  selectedUser = <any>{};

  constructor(
    private userLogicService : UserLogicService,
    private _store: Store<any>
  ) { 
    _store.select('reducer').subscribe(newState =>{
      console.log(newState)
      this.users = newState.users;
      // if(newState.selectedUserReducer)
      // {
      //   let ul = this.users.filter((user)=>{
      //     if(user._id == newState.selectedUserReducer._id){
      //       user.active = true;
      //     }
      //     else{
      //       user.active = false;
      //     }
      //   });
        
      // }
    })
          
    }
    

  ngOnInit() {
    this.userLogicService.GetUsers().then((data)=>{
      this._store.dispatch({
        type: 'FETCH_USERS',
        payload: data
      });
      
    })
  }

  userSelected(user){
    if(!user.active){
      this._store.dispatch({
        type: 'USER_SELECTED',
        payload: user
      });
    }
    else{
      this._store.dispatch({
        type: 'USER_DESELECTED',
        payload: user
      });
    }
    
  }

  onScroll() {
    console.log('scrolled!!');
  }

}
