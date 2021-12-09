import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const body = {title: this.title, description: this.description, date: this.date};
    this.http.post('https://myblog-f8665-default-rtdb.firebaseio.com/posts.json', body)
      .subscribe();
  }

}
