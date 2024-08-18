import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllmoviesService } from 'src/app/service/allmovies.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent {
  constructor(private _AllmoviesService:AllmoviesService,private ActivatedRoute:ActivatedRoute){}
  id:string=``;
  peopledeatlis:any;
  prefixPath:string=`https://image.tmdb.org/t/p/w500/`;

  ngOnInit(): void {
    this.getpeopledetalis()
  }

  getpeopledetalis(){
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this._AllmoviesService.getpoepleDetails(this.id).subscribe((res)=>{
      this.peopledeatlis = res
      console.log(this.peopledeatlis);
      
    })
  }

}
