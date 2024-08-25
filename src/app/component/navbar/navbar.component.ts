import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AllmoviesService } from 'src/app/service/allmovies.service';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private _AuthService: AuthServiceService, private _UserService: UserService
    , private _AllmoviesService: AllmoviesService) { }

    results: any[] = [];
  prefixPath: string = `https://image.tmdb.org/t/p/w500/`;
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

  searchMedia: FormGroup = new FormGroup({
    keyword: new FormControl(null)
  })

  SearchMovie(searchMedia: FormGroup) {
    this._AllmoviesService.SearchMovie(searchMedia.value.keyword).subscribe((response) => {
      this.results = response.results

    })
  }
  clearSearchInput(searchInput: HTMLInputElement) {
    searchInput.value = '';  // Clear the input field
    this.results = [];  // Optionally clear the search results
}
  clearResults() {
    this.results = [];
  }
  signout() {
    this._AuthService.logOut();
  }

}
