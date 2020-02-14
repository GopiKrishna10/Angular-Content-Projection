import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {DataService } from './data.service'
@Injectable()
export class PostService extends DataService{
    // private url = 'https://my-json-server.typicode.com/typicode/demo/posts';
  constructor(http: HttpClient) {
    super('https://my-json-server.typicode.com/typicode/demo/posts',http);
   }

}
