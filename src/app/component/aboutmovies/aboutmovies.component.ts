import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Renderer2, TemplateRef, ViewChild } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AllmoviesService } from 'src/app/service/allmovies.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-aboutmovies',
  templateUrl: './aboutmovies.component.html',
  styleUrls: ['./aboutmovies.component.css']
})
export class AboutmoviesComponent implements AfterViewInit {
  constructor(private _ActivatedRoute: ActivatedRoute,
    private _AllmoviesService: AllmoviesService,
    private cdRef: ChangeDetectorRef,
    private renderer: Renderer2,
    private el: ElementRef,
    // public dialog: MatDialog,
    // private _openDialog: MatDialog
  ) { }


  // @ViewChild('playvideo')
  // playvideo!: TemplateRef<any>
  key: string = ``;

  id: string = '';
  movieDetails: any;
  imagePrefix: string = "https://image.tmdb.org/t/p/w500"
  originalPoster: string = "https://image.tmdb.org/t/p/original/"

  imgPath: any;
  imgPost: any;
  imgPathCast: any;
  vediosCast: any;

  runtime: any
  hours: any
  minutes: any

  ngOnInit(): void {

    this._ActivatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
    this._AllmoviesService.getMovieDetalis('movie', this.id).subscribe({
      next: (response) => {

        this.movieDetails = response
        this.imgPath = this.movieDetails.backdrop_path
        this.imgPathCast = this.movieDetails.credits.cast.slice(0, 12)
        // console.log(this.imgPathCast);
        this.vediosCast = this.movieDetails.videos.results.slice(0, 3)
        this.getFirst()
        this.cdRef.detectChanges();
        this.imgPost = this.movieDetails.images.backdrops.slice(0, 3)
        
        // console.log(this.imgPost);
        console.log(this.vediosCast);
      }
    })
    this._AllmoviesService.getMovieDetalis('tv', this.id).subscribe({
      next: (response) => {
        this.movieDetails = response
        this.imgPath = this.movieDetails.backdrop_path
        this.imgPathCast = this.movieDetails.credits.cast.slice(0, 12)
        this.cdRef.detectChanges();
        this.imgPost = this.movieDetails.images.backdrops.slice(0, 3)
        this.vediosCast = this.movieDetails.videos.results.slice(0, 3)
        // console.log(this.imgPost);
        console.log(this.vediosCast);

      }
    })
    setTimeout(() => {
      this.imgPathCast = this.movieDetails.credits.cast.slice(0, 12);
      this.imgPost = this.movieDetails.images.backdrops.slice(0, 3)
      this.cdRef.detectChanges();
    }, 100);

  }


  ngAfterViewInit(): void {
    this._ActivatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.loadMovieDetails();
      this.loadMoviesDetails()
      this._AllmoviesService.getMovieDetalis('movie', this.id).subscribe({
        next: (response) => {
          this.movieDetails = response;
          this.imgPost = this.movieDetails.images.backdrops.slice(0, 3)
        }
      })
    });

  }
  loadMovieDetails(): void {
    this._AllmoviesService.getMovieDetalis('movie', this.id).subscribe({
      next: (response) => {
        this.movieDetails = response;
        this.imgPath = this.movieDetails.backdrop_path;
        this.imgPost = this.movieDetails.images.backdrops.slice(0, 3);
        this.imgPathCast = this.movieDetails.credits.cast.slice(0, 12);
        setTimeout(() => {
          this.cdRef.detectChanges();  // Trigger change detection manually
          this.renderer.addClass(this.el.nativeElement, 'reflow');
          this.renderer.removeClass(this.el.nativeElement, 'reflow');
        }, 100);

      }

    });
    this._AllmoviesService.getMovieDetalis('tv', this.id).subscribe({
      next: (response) => {
        this.movieDetails = response;
        this.imgPath = this.movieDetails.backdrop_path;
        this.imgPost = this.movieDetails.images.backdrops.slice(0, 3)
        this.imgPathCast = this.movieDetails.credits.cast.slice(0, 12);
        this.imgPost = this.movieDetails.images.backdrops.slice(0, 3)
        setTimeout(() => {
          this.cdRef.detectChanges();  // Trigger change detection manually
          this.renderer.addClass(this.el.nativeElement, 'reflow');
          this.renderer.removeClass(this.el.nativeElement, 'reflow');
        }, 100);
        // this.OwlOptions.trigger('refresh.owl.carousel');
        // this.imgPost = this.movieDetails.images.backdrops.slice(0, 10)

      }

    });
  }





  loadMoviesDetails() {
    this._AllmoviesService.getMovieDetalis('movie', this.id).subscribe({
      next: (response) => {
        this.movieDetails = response;

        this.imgPost = this.movieDetails.images.backdrops.slice(0, 3);
        setTimeout(() => {
          this.cdRef.detectChanges();  // Trigger change detection manually
          this.renderer.addClass(this.el.nativeElement, 'reflow');
          this.renderer.removeClass(this.el.nativeElement, 'reflow');
        }, 100);

      }

    });
    this._AllmoviesService.getMovieDetalis('tv', this.id).subscribe({
      next: (response) => {
        this.movieDetails = response;
        this.imgPost = this.movieDetails.images.backdrops.slice(0, 3)
        setTimeout(() => {
          this.cdRef.detectChanges();  // Trigger change detection manually
          this.renderer.addClass(this.el.nativeElement, 'reflow');
          this.renderer.removeClass(this.el.nativeElement, 'reflow');
        }, 100);
        // this.OwlOptions.trigger('refresh.owl.carousel');

      }

    });
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
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 7
      }
    },
    nav: false,


  }



  getFirst() {
    this._AllmoviesService.getMovieDetalis('movie', this.id).subscribe({
      next: (response) => {

        this.movieDetails = response

        this.imgPathCast = this.movieDetails.credits.cast.slice(0, 12)
        // console.log(this.imgPathCast);

      }
    })
  }

  //   Time(num:any) {
  //     this.hours = Math.floor(num / 60);
  //     this.minutes = num % 60;
  //     if (this.minutes + ''.length < 2) {
  //         this.minutes = '0' + this.minutes;
  //     }
  //     return this.hours + "h " + this.minutes +"min";
  //   }

  getvideos(videoKey: any) {
    this.key = videoKey 
    console.log(this.key);
    
    // this.openDialog()
  }
  // openDialog() {
  //   this._openDialog.open(this.playvideo);
  // }

  // showTrailer(videoKey: string): void {
  //   this.key = videoKey;
  // }

}
