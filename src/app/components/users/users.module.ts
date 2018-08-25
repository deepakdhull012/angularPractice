import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserLogicService } from './user-logic-service';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';
import { ScrollDir } from './../../directives/scrolldir.directive';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
    ],
  declarations: [LoginComponent,RegisterComponent, UsersListComponent, ScrollDir
  ],
  exports : [LoginComponent,RegisterComponent,UsersListComponent],
  providers: []
})
export class UsersModule { }
