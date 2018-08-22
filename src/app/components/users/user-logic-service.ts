import { Injectable } from '@angular/core';
import { UserService } from './../../services/user.service'


@Injectable({
    providedIn: 'root'
})
export class UserLogicService{

    constructor(private userService:UserService){

    }

    public RegisterUser(userData:any): Promise<any> {
        return this.userService.registerUser(userData);
      }

      public GetUsers(): Promise<any> {
        return this.userService.getUsers();
      }

}