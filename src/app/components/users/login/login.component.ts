import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidationConfig } from './../../../validators/validationConfig';
import { UserLogicService } from './../user-logic-service';
import { ValidatorService } from './../../../shared/utils/validator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  validationConfig: { [key: string]: any; } = {};
  loading:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userLogicService : UserLogicService,
    private validatorService : ValidatorService,
    private router: Router
  ) {

   }

  ngOnInit() {
    this.validationConfig = ValidationConfig.getLoginConfig();
    this.loginForm = this.formBuilder.group(this.validationConfig);
  }

  onSubmit(loginFormData){
    if (loginFormData.valid) {
      this.loading = true;
      this.userLogicService.LoginUser(loginFormData.value).then((loginResponse)=>{
        this.loading = false;
        if(loginResponse){
          localStorage.setItem("currentUser", JSON.stringify(loginResponse));
          this.router.navigate(['./home']);
        }
        else{
          localStorage.setItem("currentUser", null);
        }

      }).catch(err=>{
        this.loading = false;
        localStorage.setItem("currentUser", null);
      })
    }
    else{
      this.validatorService.validateAllFormFields(this.loginForm)
    }
  }

}
