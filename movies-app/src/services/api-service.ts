import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  constructor(private http: HttpClient) { }

  getMovies(search: string): Observable<any> {
    let urlSearch = environment.apiUrl + '?s=' + search + '&apikey=4a3b711b';
    return this.http.get(urlSearch);
  }

  getMovieDetails(id: string): Observable<any> {
    let urlDetails = environment.apiUrl + '?i=' + id + '&apikey=4a3b711b';
    return this.http.get(urlDetails);
  }
}
