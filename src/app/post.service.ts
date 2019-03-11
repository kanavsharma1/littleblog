import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {
  private url='https://jsonplaceholder.typicode.com/posts';
  post:any[];
  constructor(private http:Http) {
    http.get(this.url)
   }
   createPost(post){
     return this.http.post(this.url,JSON.stringify(post))
   }

   getPosts(){
    return this.http.get(this.url);
   }

   updatePost(post)
   {
    return this.http.put(this.url + '/' + post.id,JSON.stringify(post))
    
   }
   deletePost(post){
    return this.http.delete(this.url + '/' + post.id, JSON.stringify(post) )
   }

}
