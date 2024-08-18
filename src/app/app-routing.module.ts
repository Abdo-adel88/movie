import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { authGuard } from './Guards/auth.guard';
import { MoviesComponent } from './component/movies/movies.component';
import { PeopleComponent } from './component/people/people.component';
import { TvshowComponent } from './component/tvshow/tvshow.component';
import { noauthdGuard } from './Guards/noauthd.guard';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { MoviedetailsComponent } from './component/moviedetails/moviedetails.component';
import { PeopleDetailsComponent } from './component/people-details/people-details.component';
import { FooterComponent } from './component/footer/footer.component';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'home',canActivate:[authGuard] ,component:HomeComponent},
  {path:'movies',canActivate:[authGuard] ,component:MoviesComponent},
  {path:'moviedetails/:id',canActivate:[authGuard] ,component:MoviedetailsComponent},
  {path:'peopledetails/:id',canActivate:[authGuard] ,component:PeopleDetailsComponent},
  {path:'people',canActivate:[authGuard] ,component:PeopleComponent},
  {path:'tv-show',canActivate:[authGuard] ,component:TvshowComponent},
  {path:'footer',canActivate:[authGuard] ,component:FooterComponent},

  
  {path:'login',canActivate:[noauthdGuard],component:LoginComponent},
  {path:'register',canActivate:[noauthdGuard],component:RegisterComponent},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
