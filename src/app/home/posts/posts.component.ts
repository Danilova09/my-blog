import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/post.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.http.get<{ [id: string]: Post }>('https://myblog-f8665-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(result => {
        return Object.keys(result).map(id => {
          const postData = result[id];
          return new Post(postData.id, postData.title, postData.description, postData.date);
        });
      }))
      .subscribe(posts => {
        this.posts = posts;
      })
  }
}
