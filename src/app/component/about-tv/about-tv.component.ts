import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Renderer2, TemplateRef, ViewChild } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AllmoviesService } from 'src/app/service/allmovies.service';
@Component({
  selector: 'app-about-tv',
  templateUrl: './about-tv.component.html',
  styleUrls: ['./about-tv.component.css']
})
export class AboutTvComponent  implements AfterViewInit{
  key: string = '';
  id: string = '';
  movieDetails: any;
  imagePrefix: string = "https://image.tmdb.org/t/p/w500";
  originalPoster: string = "https://image.tmdb.org/t/p/original/";
  imgPath: any;
  imgPost: any;
  imgPathCast: any;
  vediosCast: any;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _AllmoviesService: AllmoviesService,
    private cdRef: ChangeDetectorRef,
    private renderer: Renderer2,
    private el: ElementRef,
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.loadMovieDetails();
    });
    
  }

  ngAfterViewInit(): void {
    this._ActivatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.loadMovieDetails();
    });
    this._AllmoviesService.getMovieDetalis('tv', this.id).subscribe({
      next: (response) => {
        this.movieDetails = response;
        this.imgPath = this.movieDetails.backdrop_path;
        this.imgPathCast = this.movieDetails.credits.cast.slice(0, 12);
        this.vediosCast = this.movieDetails.videos.results.slice(0, 3);
        this.imgPost = this.movieDetails.images.backdrops.slice(0, 3);

        this.cdRef.detectChanges();  // Trigger change detection manually
      }
    });
  }

  loadMovieDetails(): void {
    this._AllmoviesService.getMovieDetalis('tv', this.id).subscribe({
      next: (response) => {
        this.movieDetails = response;
        this.imgPath = this.movieDetails.backdrop_path;
        this.imgPathCast = this.movieDetails.credits.cast.slice(0, 12);
        this.vediosCast = this.movieDetails.videos.results.slice(0, 3);
        this.imgPost = this.movieDetails.images.backdrops.slice(0, 3);

        this.cdRef.detectChanges();  // Trigger change detection manually
      }
    });
  }

  getvideos(videoKey: any): void {
    this.key = videoKey;
  }

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
  }
  
}
