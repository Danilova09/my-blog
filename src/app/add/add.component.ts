import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from '../shared/posts.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  title!: string;
  description!: string;
  date!: string;
  postId!: string;

  constructor(
    private http: HttpClient,
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.postId = this.route.snapshot.params['id'];
    })
  }

  onSubmit() {
    if (this.router.url === '/posts/add') {
      const body = {title: this.title, description: this.description, date: this.date};
      this.http.post('https://myblog-f8665-default-rtdb.firebaseio.com/posts.json', body)
        .subscribe();
    }
    else if (this.router.url === `/posts/${this.postId}/edit`) {
      const body = {title: this.title, description: this.description, date: this.date};
      this.http.put(`https://myblog-f8665-default-rtdb.firebaseio.com/posts/${this.postId}.json`, body)
        .subscribe();
    }
  }

}
