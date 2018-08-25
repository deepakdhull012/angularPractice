import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem("currentUser")){
      this.isLoggedIn = true;
    }
  }

  logout(){
    localStorage.setItem("currentUser",null);
    this.router.navigate(['./login']);
  }

}
