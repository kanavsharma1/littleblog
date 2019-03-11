import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Http } from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';
import { PostService } from '../post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
post:any[];

constructor(private service:PostService){
 
  

}

createPost(postTitle:HTMLInputElement){
  let post={title:postTitle.value};
  postTitle.value='';
  this.service.createPost(post)
  .subscribe(Response=>{
    post['id'] = Response.json();
    this.post.splice(0,0,post);
  })
}

updatePost(post){
 this.service.updatePost(post)
  .subscribe(Response=>{
    console.log(Response.json());
  })
}
deletePost(post){
  this.service.deletePost(post)
  .subscribe(Response=>{
    let index = this.post.indexOf(post)
    this.post.splice(index,1);
  })
}

ngOnInit()
{
  this.service.getPosts()
  .subscribe(Response=>{
    console.log(Response.json());
    this.post = Response.json();
  })
}

}
