import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/post.model';
import { PostsService } from '../../shared/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private postsService: PostsService,
  ) { }

  ngOnInit(): void {
    this.posts = this.postsService.getAllPosts();
    this.postsService.postsChange.subscribe((posts: Post[]) => {
      this.posts = posts;
    })
  }
}
