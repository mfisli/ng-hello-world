import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Observable } from 'rxjs/observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class DataService {
  
  constructor(private url: string, private http: Http) { }

  getAll(){
    return this.http.get(this.url)
        // map the response obj to an array of js objs
        .map(response => response.json())
        .catch(this.handleError);      
  }
  create(resource){
    //return Observable.throw(new AppError());
    return this.http.post(this.url, JSON.stringify(resource))
        .map(response => response.json())
        .catch(this.handleError);  
  }
  update(resource){
    return this.http.patch(this.url + resource.id, JSON.stringify({ isRead: true}))
        .map(response => response.json())
        .catch(this.handleError);
  }
  delete(id){
    //return Observable.throw(new AppError());
    return this.http.delete(this.url + id)
        .map(response => response.json())
        .catch(this.handleError); // not calling(), but passing a reference! 
  }
  // private because it's an implemenation detail
  // the consumer doesn't need to know about it. 
  private handleError(error: Response){
    if(error.status === 400){
      return Observable.throw(new BadInput(error.json()));
    }
    if(error.status === 404){
      console.log("throwing 404 NotFoundError");
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));  
  }
}
