import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidationConfig } from './../../../validators/validationConfig';
import { UserLogicService } from './../user-logic-service';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: []
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  validationConfig: { [key: string]: any; } = {};

  constructor(
    private formBuilder: FormBuilder,
    private userLogicService : UserLogicService,
    private _store: Store<any>
  ) { 
   
  }

  ngOnInit() {
    this.validationConfig = ValidationConfig.getUserConfig();
    this.userForm = this.formBuilder.group(this.validationConfig);
  }
  onSubmit(userFormObj: FormGroup) {
    if (this.userForm.valid) {
      // Create a get request here
      this.userLogicService.RegisterUser(userFormObj.value).then((data)=>{
        this._store.dispatch({
          type: 'ADD_USER',
          payload: data
        });
      })
    } 
    else{
      console.log('invalid')
    }
  }

}
