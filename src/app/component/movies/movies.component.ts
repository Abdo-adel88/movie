import { Component } from '@angular/core';
import { AllmoviesService } from 'src/app/service/allmovies.service';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  constructor( private _AllmoviesService: AllmoviesService) { }
  treandingMovies: any[] = []
  imagePrefix: string = "https://image.tmdb.org/t/p/w500"



  
  ngOnInit(): void {

    window.scrollTo(0,0);


    this._AllmoviesService.getAllMovies("movie").subscribe({
      next: (Response) => {
        
        this.treandingMovies = Response.results.slice(0, 20)
        console.log(this.treandingMovies);
        
      }
    })
      
    
  }


  first: number = 0;

  rows: number = 10;

  onPageChange(event: PageEvent) {
      this.first = event.first;
      this.rows = event.rows;
  }

  getpage(page: any) {
    if (page == 0) {
      this._AllmoviesService.getPage("movie",1).subscribe((res) => {
        this.treandingMovies = res.results
console.log("onc "+page);
console.log("onc "+ this.treandingMovies);


        window.scrollTo(0,0);
      })
    }
    else {
      this._AllmoviesService.getPage("movie",page + 1).subscribe((res) => {
        this.treandingMovies = res.results
        console.log("onc222 "+page);
        console.log("sec"+ this.treandingMovies);
        window.scrollTo(0,0);
      })
    }


  }
}
