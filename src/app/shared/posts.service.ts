import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class PostsService {
  postsChange = new EventEmitter<Post[]>();
  postChange = new EventEmitter<Post>();
  post!: Post;
  posts: Post[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  onPostsChange() {
    this.postsChange.emit(this.posts);
  }

  getAllPosts() {
    this.http.get<{ [id: string]: Post }>('https://myblog-f8665-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(result => {
        return Object.keys(result).map(id => {
          const postData = result[id];
          return new Post(id, postData.title, postData.description, postData.date);
        });
      }))
      .subscribe(posts => {
        this.posts = posts;
        this.postsChange.emit(posts);
      })
    return this.posts;
  }

  getPostDetails(id: string) {
    this.http.get<Post>(`https://myblog-f8665-default-rtdb.firebaseio.com/posts/${id}.json`)
      .subscribe(result => {
        if(result !== null) {
          this.post = result;
          this.postChange.emit(result);
        }
      });
    return this.post;
  }

  deletePost(id: string) {
      this.http.delete(`https://myblog-f8665-default-rtdb.firebaseio.com/posts/${id}.json`)
        .subscribe()
  }

}
