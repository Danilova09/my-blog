import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../shared/post.model';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from '../shared/posts.service';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit {
  post!: Post;
  isDeleted = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private postsService: PostsService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = this.route.snapshot.params['id'];
      this.post = this.postsService.getPostDetails(id);
    })
    this.postsService.postChange.subscribe((post: Post) => {
      if(post !== null) {
        this.post = post;
        console.log(this.post);
      }
    })
  }

  deletePost() {
    this.route.params.subscribe((params: Params) => {
      const id = this.route.snapshot.params['id'];
      this.postsService.onDeletePost(id);
    })
    this.isDeleted = true;
  }
}
