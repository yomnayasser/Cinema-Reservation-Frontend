import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  moviePathUrl="http://localhost:3000/movie/"
  theaterPathUrl="http://localhost:3000/theater/"
  constructor(private http : HttpClient) { }

  
  getMovies():Observable<any>{
    return this.http.get(`${this.moviePathUrl}allMovies`)
  }

  getsingleMovie(id : any):Observable<any>{
    return this.http.get(`${this.moviePathUrl}getMovie/${id}`)
  }

  getMovieTheater(id:any):Observable<any>{
    return this.http.get(`${this.theaterPathUrl}movieTheater/${id}`)
  }

  getMovieSchudleTime(theaterID:any, movieID:any){
    return this.http.get(`${this.theaterPathUrl}getMovieSchudleTime/${theaterID}/${movieID}/3July`)
  }

  getMovieDates(theaterID:any, movieID:any){
    return this.http.get(`${this.theaterPathUrl}getMovieSchudleDate/${theaterID}/${movieID}`)
  }

  getMovieDeitals(movieID:any){
    return this.http.get(`${this.moviePathUrl}getMovie/${movieID}`)
  
  }

}
