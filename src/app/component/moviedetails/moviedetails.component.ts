import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AllmoviesService } from 'src/app/service/allmovies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
  
})
export class MoviedetailsComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute, private _AllmoviesService: AllmoviesService) { }
  id: string = '';
  movieDetails: any;
  imagePrefix: string = "https://image.tmdb.org/t/p/w500"
  originalPoster: string = "https://image.tmdb.org/t/p/original/"

  imgPath: any;
  imgPost: any;
  imgPathCast: any;
  vediosCast: any;

  ngOnInit(): void {
    window.scrollTo(0,0);
    this._ActivatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
    this._AllmoviesService.getMovieDetalis('movie', this.id).subscribe({
      next: (response) => {

        this.movieDetails = response
        console.log(this.movieDetails);
        this.imgPath = this.movieDetails.backdrop_path
        this.imgPathCast = this.movieDetails.credits.cast.slice(0, 12)
        console.log(this.imgPathCast);
        this.imgPost = this.movieDetails.images.backdrops.slice(0, 3)

        this.vediosCast=this.movieDetails.videos.results.slice(0, 3)
        this.getFirst()
      }
    })
    this._AllmoviesService.getMovieDetalis('tv', this.id).subscribe({
      next: (response) => {
        this.movieDetails = response
        this.imgPath = this.movieDetails.backdrop_path
        this.imgPathCast = this.movieDetails.credits.cast.slice(0, 12)
        this.imgPost = this.movieDetails.images.backdrops.slice(0, 10)
        console.log(this.imgPathCast);

      }
    })

  }

  customOptions: OwlOptions = {
    loop: true,
    center: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    dots: false,
    autoplayTimeout: 3000,

    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
  getFirst(){
    this._AllmoviesService.getMovieDetalis('movie', this.id).subscribe({
      next: (response) => {

        this.movieDetails = response
        this.imgPost = this.movieDetails.images.backdrops.slice(0, 3)

        this.imgPathCast = this.movieDetails.credits.cast.slice(0, 12)
        console.log(this.imgPathCast);

      }
    })
  }

}
