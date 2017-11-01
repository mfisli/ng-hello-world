import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/catch'

@Injectable()
export class PostService {
  //1. Create a private url
  private url: string = 'http://jsonplaceholder.typicode.com/posts';
  //2. Inject the Http dependency with visibility 
  //3. Also add serivce to client component's constructor 
  constructor(private http: Http) { }
  
  //4. Create a get method
  getPosts(){
    return this.http.get(this.url); // return an obserable 
  }
  postPost(obj){
    return this.http.post(this.url, JSON.stringify(obj));
  }
  patchPost(obj){
    console.log(obj);    
    return this.http.patch(this.url + "/" + obj.id, JSON.stringify({isRead:true}));
  }
  deletePost(id: number){
    // handel the http domain here (including errors)
    console.log(id);
    return this.http.delete(this.url + "/" + id)
      .catch((error: Response) => {
        if(error.status === 404){
          return Observable.throw(new NotFoundError());
        }
        return Observable.throw(new AppError(error))
      });
  }

}
