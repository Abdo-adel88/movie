import { Component, OnInit } from '@angular/core';
import { AllmoviesService } from 'src/app/service/allmovies.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: any;
  constructor(private _UserService: UserService, private _AllmoviesService: AllmoviesService) { }
  treandingMovies: any = []
  treandingTv: any[] = []
  // isLoading:boolean=true;

  imagePrefix: string = "https://image.tmdb.org/t/p/w500"
  ngOnInit(): void {
    window.scrollTo(0,0);

    this._UserService.userName$.subscribe(name => {
      this.userName = name;
    });

    this._AllmoviesService.getAllMovies("movie").subscribe({
      next: (Response) => {
        
        this.treandingMovies = Response.results.slice(0, 9)
        console.log(this.treandingMovies);
        
      }
    })
    this._AllmoviesService.getAllMovies("tv").subscribe({
      next: (Response) => {
        
        this.treandingTv = Response.results.slice(0, 9)
        console.log(this.treandingTv);

      }
    })
    
  

  }
}
