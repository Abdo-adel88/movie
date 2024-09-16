import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AllmoviesService } from 'src/app/service/allmovies.service';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.css']
})
export class SimilarComponent implements OnInit, AfterViewInit {

// [moviesimilar]="movieDetails"
// @Input()  moviesimilar: any[] = [];

  id: string = '';
  movieDetails: any;
  moviesimilar: any[] = [];
  imagePrefix: string = "https://image.tmdb.org/t/p/w500";
  originalPoster: string = "https://image.tmdb.org/t/p/original/";

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
      0: { items: 6 },
      400: { items: 13 },
      740: { items: 15 },
      940: { items: 15 }
    },
    nav: false,
    stagePadding: 50,
    autoWidth: true,
    animateIn: 'flipInX',
    animateOut: 'flipOutX'
  };

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _AllmoviesService: AllmoviesService,
    private cdRef: ChangeDetectorRef,
    private renderer: Renderer2,
    private el: ElementRef,
  ) {}

  ngOnInit(): void {
    // Subscribe to the route parameters
    this._ActivatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.loadMovieDetails();
    });
  }

  ngAfterViewInit(): void {
    // Nothing is required here for handling the parameter change since we are doing it in ngOnInit
  }

  loadMovieDetails(): void {
    this._AllmoviesService.getMovieDetalis('movie', this.id).subscribe({
      next: (response) => {
        this.movieDetails = response;
        this.moviesimilar = this.movieDetails.similar.results;
        console.log(this.moviesimilar);
      }
    });
  }

  // Method to handle click and navigate to new details
  pramsCheck() {
    // No need for additional parameter subscription here
    // The loadMovieDetails is called in ngOnInit, and the component will automatically reload
  }
}




