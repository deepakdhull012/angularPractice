import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items=[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'Users', icon: 'fa fa-fw fa-check',
      },
      {
          label: 'Questions', icon: 'fa fa-fw fa-soccer-ball-o',
      },
      {
          label: 'Topics', icon: 'fa fa-fw fa-child',
      },
      {
        label: 'Others', icon: 'fa fa-fw fa-soccer-ball-o',
    },
    {
        label: 'Contact Us', icon: 'fa fa-fw fa-child',
    }
    ];
  }

}
