import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllmoviesService {

  constructor(private _HttpClient: HttpClient) { }

  apiKey: string = `0d0b785d8a3759722b8db28e113330f9`

  getAllMovies(treanding: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${treanding}/day?api_key=${this.apiKey}`);
  }
  getPage(treanding: string, page: any): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${treanding}/day?api_key=${this.apiKey}&page=${page}`);
  }
  //<!=========================================== People ===========================================>
  getpoeple(): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=${this.apiKey}&language=en-US`)
  }
  getpoepleDetails(id: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=${this.apiKey}&&language=en-US&append_to_response=movie_credits,tv_credits,images`)
  }

  getPagPoeple(page: any): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=${this.apiKey}&language=en-US&page=${page}`)
  }

  getMovieDetalis(type: any, id: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${this.apiKey}&language=en-US&append_to_response=credits,videos,similar,images&include_image_language=en,null`)
  }
  getTrailer(type: string, id: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${this.apiKey}&language=en-US`)
  }

  SearchMovie(keyword:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&query=${keyword}&page=1&include_adult=false`)
  }
}
