import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AllmoviesService } from 'src/app/service/allmovies.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.css']
})
export class TvdetailsComponent implements OnInit, OnDestroy {
  constructor(private _ActivatedRoute: ActivatedRoute, private _AllmoviesService: AllmoviesService) { }
  id: string = '';
  movieDetails: any;
  tvDetails: any;
  imagePrefix: string = "https://image.tmdb.org/t/p/w500"
  originalPoster: string = "https://image.tmdb.org/t/p/original/"
  key: string = ``;

  imgPath: any;
  imgPost: any;
  imgPathCast: any;
  vediosCast: any;
  private routeSub: Subscription | undefined;


  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.routeSub = this._ActivatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.fetchMovieDetails();
    });

    this._AllmoviesService.getMovieDetalis('tv', this.id).subscribe({
      next: (response) => {
        this.tvDetails = response
        this.imgPath = this.tvDetails.backdrop_path
        this.imgPathCast = this.tvDetails.credits.cast.slice(0, 12)
        this.imgPost = this.tvDetails.images.backdrops.slice(0, 10)
        console.log(this.imgPathCast);
        console.log(this.tvDetails);
        // this.vediosCast = this.movieDetails.videos.results.slice(0, 1)
        this.getFirstVideo()
      }
    })
  }

  fetchMovieDetails(): void {
    window.scroll(0,0)

    this._AllmoviesService.getMovieDetalis('tv', this.id).subscribe({
      next: (response) => {
        this.tvDetails = response
        this.imgPath = this.tvDetails.backdrop_path
        this.imgPathCast = this.tvDetails.credits.cast.slice(0, 12)
        this.imgPost = this.tvDetails.images.backdrops.slice(0, 10)
        console.log(this.imgPathCast);
        console.log(this.tvDetails);
        // this.vediosCast = this.movieDetails.videos.results.slice(0, 1)
        this.getFirstVideo()
      }
    })
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  getFirstVideo() {
    this._AllmoviesService.getMovieDetalis('tv', this.id).subscribe({
      next: (response) => {

        this.tvDetails = response

        this.vediosCast = this.tvDetails.videos.results.slice(0, 1)

      }
    })

  }
  getvideos(videoKey: any) {
    this.key = videoKey
    console.log(this.key);
  }

}
