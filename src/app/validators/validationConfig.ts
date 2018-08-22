import { Validators } from '@angular/forms';

export class ValidationConfig {


    static getUserConfig(): { [key: string]: any; } {
        return {
            userName: ['a', [Validators.required, Validators.pattern('.*[^ ].*')]],
            mobile: ['1233211233', [Validators.required, Validators.pattern('[0-9]+$')]],
            email: ['a@ds.co', [Validators.required, Validators.pattern(RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))]],
            password: ['null',[Validators.required]],
            confirmPassword: ['null',[Validators.required]]
        };
    }

}