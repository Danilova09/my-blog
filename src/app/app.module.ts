import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddComponent } from './add/add.component';
import { NotFoundComponent } from './not-found.component';
import { PostsComponent } from './home/posts/posts.component';
import { PostsItemComponent } from './home/posts/posts-item/posts-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ReadMoreComponent } from './read-more/read-more.component';
import { PostsService } from './shared/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    AddComponent,
    NotFoundComponent,
    PostsComponent,
    PostsItemComponent,
    ReadMoreComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
