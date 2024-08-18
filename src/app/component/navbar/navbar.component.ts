import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  

  constructor(private _AuthService: AuthServiceService, private _UserService: UserService
  ) { }

  
  userName: any;
  isLogeedUser: boolean = false;
  ngOnInit(): void {


    this._AuthService.isLoggedInSubject.subscribe((isLogged) => {
      this.isLogeedUser = isLogged;
    });
    this._UserService.userName$.subscribe(name => {
      this.userName = name;
    });
  }


  signout() {
    this._AuthService.logOut();
  }

}
