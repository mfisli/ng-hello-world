import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { Post2Service } from './../services/post2.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.css']
})
export class Post2Component implements OnInit{
  posts: any[];

  constructor(private service: Post2Service) {

  }

  ngOnInit(){
    this.service.getAll()
      .subscribe(posts => this.posts = posts); 
        // no need for custom error detection - 
        // this will be caught by custom global handler
  }

  createPost(input: HTMLInputElement){
    let post = { title: input.value }; 
    this.posts.splice(0,0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
        },
        (error: AppError) => {
          this.posts.splice(0 , 1);
          if(error instanceof BadInput){
            console.log("Error getting posts due to bad input");  
            //this.form.setErrors(error.originalError);          
          } else throw error; 
            // rethrow error to trigger custom global handler
          
        });
  }
  updatePost(post){
    this.service.update(post)
    .subscribe( 
      post => {
        console.log(post);
      })
  }

  deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
        null, // no need for body 
        (error:AppError) => {  // type is: any, but adding :AppError add intelisense 
          this.posts.splice(index, 0, post);
          
          if(error instanceof NotFoundError){
            console.log("Error getting posts (404)");                    
            //alert("This post has already been deleted.")
          } else throw error; // rethrow for global error handler to catch
      })
  }
}
