import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../shared/post.model';
import { PostsService } from '../shared/posts.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  title!: string;
  description!: string;
  date!: string;

  constructor(
    private http: HttpClient,
    private postsService: PostsService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const body = {title: this.title, description: this.description, date: this.date};
    this.http.post('https://myblog-f8665-default-rtdb.firebaseio.com/posts.json', body)
      .subscribe();
  }

}
