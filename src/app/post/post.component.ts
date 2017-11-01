import { PostService } from './../services/post.service';
import { FormGroup } from '@angular/forms/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  posts: any[];

  constructor(private service: PostService){}
 
  ngOnInit(){
    this.service.getPosts()
      .subscribe( response => {
        this.posts = response.json();
      }, error =>{
        alert("Error.");
        console.log(error);
      })
  }

  createPost(input: HTMLInputElement){
    let post = { title : input.value };
    input.value = '';
    this.service.postPost(post)
      .subscribe(
        response => {
          console.log(response.json()); 
          post['id'] = response.json().id;
          this.posts.splice(0,0, post);
      }, 
      (error: Response) => {
        if(error.status == 400){
          alert("Post is not correclty formed.")
          // this.form.setErrors(errors.json());
          // Display errors on the form using key / value
        } else {
          alert("Error.");
          console.log(error);
        }
    })
  }
  updatePost(input){
    this.service.patchPost(input)
      .subscribe(
        response =>{
          console.log(response.json())
        }, 
      error =>{
        alert("Error.");
        console.log(error);
      })
  }
  deletePost(input){
    this.service.deletePost(input.id)
    .subscribe(
      resonse =>{
        let index = this.posts.indexOf( input );
        this.posts.splice( index, 1);
      }, 
      (error: Response) => {
        if (error.status === 404){
          alert("Post already deleted.")          
        } else {
          alert("Error.");
          console.log(error);
        }
    })
  }
  // submit(input){    
  //   let newPost = { 
  //     title : input.postTitle,
  //     body : input.postBody
  //   }
  //   this.http.post(this.url, JSON.stringify(newPost))
  //     .subscribe(response =>{
  //       newPost['id'] = response.json().id;  
  //       this.posts.splice(0, 0, newPost);
  //   })
  // }
}
