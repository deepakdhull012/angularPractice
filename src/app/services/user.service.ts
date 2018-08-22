import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService{
    server = environment.server;

    constructor(private http: HttpClient){

    }

    public registerUser(userData:any): Promise<any> {
        return this.http.post(`${this.server}users/normal/`,userData).toPromise();
      }
    
      public getUsers(): Promise<any> {
        return this.http.get(`${this.server}users/`).toPromise();
      }

}