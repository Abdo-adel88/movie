import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule} from'@angular/common/http';
import { MoviesComponent } from './component/movies/movies.component';
import { TvshowComponent } from './component/tvshow/tvshow.component';
import { PeopleComponent } from './component/people/people.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { MoviedetailsComponent } from './component/moviedetails/moviedetails.component';
import { HeaderComponent } from './component/header/header.component';
import { PaginatorModule } from 'primeng/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NetflixLoadingComponent } from './component/netflix-loading/netflix-loading.component';
import { PeopleDetailsComponent } from './component/people-details/people-details.component';
import { FooterComponent } from './component/footer/footer.component';

import { MaterialModule } from './component/material/material.module';
import { AboutmoviesComponent } from './component/aboutmovies/aboutmovies.component';
import { VideoModalComponent } from './component/video-modal/video-modal.component';
import { SafeUrlPipe } from './component/safe-url.pipe';
import { AboutpeopleComponent } from './component/aboutpeople/aboutpeople.component';
import { TvdetailsComponent } from './component/tvdetails/tvdetails.component';
import { AboutTvComponent } from './component/about-tv/about-tv.component';
import { SimilarComponent } from './component/similar/similar.component';
import { SimilarTvComponent } from './component/similar-tv/similar-tv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    MoviesComponent,
    TvshowComponent,
    PeopleComponent,
    NotfoundComponent,
    MoviedetailsComponent,
    HeaderComponent,
    NetflixLoadingComponent,
    PeopleDetailsComponent,
    FooterComponent,
    AboutmoviesComponent,
    VideoModalComponent,
    SafeUrlPipe,
    AboutpeopleComponent,
    TvdetailsComponent,
    AboutTvComponent,
    SimilarComponent,
    SimilarTvComponent,
    
    
   ],
   schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule ,
    PaginatorModule,
    MatSlideToggleModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
