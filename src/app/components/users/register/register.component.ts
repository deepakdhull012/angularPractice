import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidationConfig } from './../../../validators/validationConfig';
import { UserLogicService } from './../user-logic-service';
import { Store } from '@ngrx/store';
import { ValidatorService } from './../../../shared/utils/validator.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: []
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  validationConfig: { [key: string]: any; } = {};
  loading:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userLogicService : UserLogicService,
    private _store: Store<any>,
    private validatorService : ValidatorService
  ) {

  }

  ngOnInit() {
    this.validationConfig = ValidationConfig.getUserConfig();
    this.userForm = this.formBuilder.group(this.validationConfig);
  }
  onSubmit() {
    if (this.userForm.valid) {
      this.loading = true;
      // Create a get request here
      this.userLogicService.RegisterUser(this.userForm.value).then((data)=>{
        this.loading = false;
        this._store.dispatch({
          type: 'ADD_USER',
          payload: data
        });
      }).catch(err=>{
        this.loading = false;
      })
    }
    else{
      this.validatorService.validateAllFormFields(this.userForm)
    }
  }



}
