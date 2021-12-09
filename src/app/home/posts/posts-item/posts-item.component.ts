import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../shared/post.model';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.css']
})
export class PostsItemComponent  {
  @Input() post = new Post('post1', 'Post 1 Title', 'lorem upsum sum ement', '12/8/2021');

}
