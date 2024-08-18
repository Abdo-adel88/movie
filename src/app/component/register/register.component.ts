import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatch } from 'src/app/custom validation/password-match';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _AuthServiceService: AuthServiceService, private _Router:Router) { }
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-z].{5,}$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-z].{5,}$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  }, { validators: passwordMatch })


  apiErrorMessage: string = '';

  isLoading: boolean = false;
  handelregister(regForm: FormGroup) {
    if (this.registerForm.valid) {
      this.isLoading = true
this._AuthServiceService.register(regForm.value).subscribe({
  next:()=>{
    this._Router.navigate(["/login"])
    this.isLoading = false

  },
  error:(err)=>{
    this.apiErrorMessage=err.error.message
    this.isLoading = false

  }
})
    }

  }
}
