import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, catchError } from 'rxjs';
import { Slide } from '../data/Slide';
import { Category } from '../data/Category';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};

@Injectable()
export class RestService {
  rootUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

  getSlides(): Observable<Slide[]>{
    return this.http.get<Slide[]>(this.rootUrl+'/slide/all');
  }

  getMenu(): Observable<Category[]>{
    return this.http.get<Category[]>(this.rootUrl+'/menu/all');
  }

}
