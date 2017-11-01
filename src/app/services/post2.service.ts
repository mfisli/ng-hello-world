import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Post2Service extends DataService{
  //private readonly url: string = 'http://jsonplaceholder.typicode.com/posts/';
  
  constructor(http: Http) {
    // can't pass this.url because the parent must be created before
    // the child - ie there is no "this" until parent is made first
    super('http://jsonplaceholder.typicode.com/posts/', http);
   }

}
