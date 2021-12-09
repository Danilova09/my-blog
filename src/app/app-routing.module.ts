import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { AddComponent } from './add/add.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'posts', component: HomeComponent},
  {path: 'posts/add', component: AddComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
