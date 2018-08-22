import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserLogicService } from './user-logic-service';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent,RegisterComponent, UsersListComponent],
  exports : [LoginComponent,RegisterComponent,UsersListComponent],
  providers: [UserLogicService]
})
export class UsersModule { }