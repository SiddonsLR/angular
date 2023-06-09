import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl = "http://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";
  
  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)
  }

  // trendingmovieapidata
  trendingMovieApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }
  // searchmovie

  getSearchMovie(data:any):Observable<any>{
    console.log(data, 'movie#')
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }
}
// getmoviedetails
// getMovieDetails():Observable<any>{
//   return this.http.get(`${this.baseurl}/movie/${data}?api_key${this.apikey}`)
// }
