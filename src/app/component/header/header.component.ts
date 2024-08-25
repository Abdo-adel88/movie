import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { AllmoviesService } from 'src/app/service/allmovies.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() headerTrendingMovie: any = [];
  imagePrefix: string = "https://image.tmdb.org/t/p/w500";
  originalPoster: string = "https://image.tmdb.org/t/p/original/";
  imgPath: string | undefined;

  customOptions: OwlOptions = {
    loop: true,
    center: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 3000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: { items: 5 },
      400: { items: 3 },
      740: { items: 5 },
      940: { items: 15 }
    },
    nav: false,
    stagePadding: 50,
    autoWidth: true,
    animateIn: 'flipInX',
    animateOut: 'flipOutX'
  };
  

  constructor(private _AllmoviesService: AllmoviesService) {}

  treandingMovies: any = [];

  ngOnInit(): void {
    this._AllmoviesService.getAllMovies("movie").subscribe({
      next: (Response) => {
        this.treandingMovies = Response.results.slice(0, 20);
        // Initialize background with the first movie's backdrop
        this.imgPath = this.treandingMovies[0]?.backdrop_path;
      }
    });
  }

  onSlideChange(data: SlidesOutputData): void {
    const centerIndex = data.startPosition;
    if (centerIndex !== undefined && this.treandingMovies[centerIndex]) {
      this.imgPath = this.treandingMovies[centerIndex].backdrop_path;
    }
  }
}
