import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private _HttpClient: HttpClient, private _Router: Router, private _UserService: UserService) { }

  isLoggedInSubject = new BehaviorSubject<boolean>(localStorage.getItem('Token') ? true : false);

  register(regForm: object): Observable<any> {
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup", regForm);
  }
  login(loginForm: object): Observable<any> {
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin", loginForm);
  }

  logOut() {
    localStorage.removeItem('Token');
    localStorage.removeItem('userName');  // Clear userName from localStorage
    this._UserService.setUserName("");  // Clear the userName in UserService
    this._Router.navigate(['/login']);
    this.isLoggedInSubject.next(false);
  }
}
