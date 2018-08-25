import { Validators } from '@angular/forms';

export class ValidationConfig {


    static getUserConfig(): { [key: string]: any; } {
        return {
            userName: [null, [Validators.required, Validators.pattern('.*[^ ].*')]],
            mobile: [null, [Validators.required,Validators.minLength(10), Validators.pattern('[0-9]+$')]],
            email: [null, [Validators.required, Validators.pattern(RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))]],
            password: [null,[Validators.required]],
            confirmPassword: [null,[Validators.required]]
        };
    }

    static getLoginConfig(): { [key: string]: any; } {
      return {
          email: ['deepakdhull012@gmail.com', [Validators.required, Validators.pattern(RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))]],
          password: ['gmailPwdPsd',[Validators.required]],
      };
  }

}
