import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../shared/post.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from '../shared/posts.service';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit {
  post!: Post;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private postsService: PostsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = this.route.snapshot.params['id'];
      this.post = this.postsService.getPostDetails(id);
    })
    this.postsService.postChange.subscribe((post: Post) => {
      if(post !== null) {
        this.post = post;
      }
    })
  }

  delete() {
    this.route.params.subscribe((params: Params) => {
      const id = this.route.snapshot.params['id'];
      this.postsService.deletePost(id);
      void this.router.navigate(['/']);
    })
  }

  edit() {
    this.route.params.subscribe((params: Params) => {
      const id = this.route.snapshot.params['id'];
      this.postsService.editPost(id);
      void this.router.navigate([`posts/:${id}/edit`]);
    })
  }

}
