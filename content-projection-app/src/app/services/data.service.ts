import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
      catchError(this.handleError(error)),
    );
  }
  deletePost(post){
    return this.http.delete(this.url + '/' + post.id).pipe(
        map(response => resonse),
       catchError((error:Response) => {
         this.handleError(error);
    })
    )
   
  }
   private handleError(error: Response){
      if(error.status === 400){
        return Observable.throwError(new BadInput(error));
      }
       if(error.status === 404){
        return Observable.throwError(new NotFoundError(error));
      }      
       return Observable.throwError(new AppError(error));
  }
}
