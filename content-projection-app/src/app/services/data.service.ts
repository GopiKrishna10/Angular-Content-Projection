import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import {catchError,map } from 'rxjs/operators';
import {Observable,throwError } from 'rxjs';
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';
@Injectable({
  providedIn: 'root'
})
export class DataService {
    private url = 'https://my-json-server.typicode.com/typicode/demo/posts';
  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(this.url);
  }
  create(resource){
    return this.http.post(this.url, resource).pipe(
      catchError(this.handleError)
    );
  }
  delete(post){
    return this.http.delete(this.url + '/' + post.id).pipe(
        map(response => response),
       catchError(this.handleError)
    )
   
  }
   private handleError(error: HttpErrorResponse){
      if(error.status === 400){
        return throwError(new BadInput(error));
      }
       if(error.status === 404){
        return throwError(new NotFoundError(error));
      }      
       return throwError(new AppError(error));
  }
}
