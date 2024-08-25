import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AllmoviesService } from 'src/app/service/allmovies.service';

@Component({
  selector: 'app-aboutpeople',
  templateUrl: './aboutpeople.component.html',
  styleUrls: ['./aboutpeople.component.css']
})
export class AboutpeopleComponent implements AfterViewInit {
  id: string = '';
  peopleDetails: any;
  imgPathCast: any[] = [];
  PathCast: any[] = [];
  tvPathCast: any[] = [];
  prefixPath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private _AllmoviesService: AllmoviesService,
    private activatedRoute: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.loadPeopleDetails();
    });
  }

  ngAfterViewInit(): void {
    // You can perform any actions needed after the view is initialized here.
    this.loadPeopleDetails()
  }

  loadPeopleDetails(): void {
    this._AllmoviesService.getpoepleDetails(this.id).subscribe({
      next: (res) => {
        this.peopleDetails = res;
        this.imgPathCast = this.peopleDetails.images.profiles.slice(0, 6);
        this.PathCast = this.peopleDetails.movie_credits.cast.slice(0, 12);
        this.tvPathCast = this.peopleDetails.tv_credits.cast.slice(0, 12);
        this.cdRef.detectChanges(); // Trigger change detection manually

        // Optionally, add a small timeout to ensure proper rendering
        setTimeout(() => {
          this.renderer.addClass(this.el.nativeElement, 'reflow');
          this.renderer.removeClass(this.el.nativeElement, 'reflow');
        }, 100);
      },
      error: (err) => console.error('Failed to load details', err),
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
      0: { items: 2 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 7 }
    },
    nav: false,
  };
}
