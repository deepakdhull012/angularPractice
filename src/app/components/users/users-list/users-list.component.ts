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
  columnDefs = [];

  constructor(
    private userLogicService : UserLogicService,
    private _store: Store<any>
  ) {
    _store.select('reducer').subscribe(newState =>{
      console.log(newState)
      this.users = newState.users;
    })

    this.columnDefs = [
      {headerName: 'Name', field: 'userName' },
      {headerName: 'Email', field: 'email' },
      {headerName: 'Mobile', field: 'mobile'},
      {headerName: 'Password', field: 'password'}
  ];

    }


  ngOnInit() {
    if(this.users.length == 0){
      this.userLogicService.GetUsers().then((data)=>{
        this._store.dispatch({
          type: 'FETCH_USERS',
          payload: data
        });

      })
    }
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
