import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private _AuthService: AuthServiceService,
    private _router: Router,
    private _UserService: UserService

  ) { }
  apiErrorMessage: string = '';
  isLoading: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-z].{5,}$/)]),
  })
  userName: any;
  handelLogin(loginForm: FormGroup) {
    if (loginForm.valid) {
      this.isLoading = true;
  
      this._AuthService.login(loginForm.value).subscribe({
        next: (Response) => {
          // Store the token and update the user information
          localStorage.setItem('Token', Response.token);
          this.userName = Response.user.name;
          this._UserService.setUserName(this.userName);
          this._AuthService.isLoggedInSubject.next(true);
  
          // Delay the navigation by 6 seconds
          setTimeout(() => {
            this._router.navigate(['/home']).then(() => {
              // Set `isLoading` to false after navigation is complete
              this.isLoading = false;
            });
          }, 4000);
        },
        error: (err) => {
          console.log(err);
          this.apiErrorMessage = err.error.message;
          // Set `isLoading` to false if an error occurs
          this.isLoading = false;
        },
      });
    }
  }
  

}
