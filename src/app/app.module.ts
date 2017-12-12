import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HackerComponent } from './hacker/hacker.component';
import { routing } from './app.routing';
import { NewComponent } from './new/new.component';
import { CommentsComponent } from './comments/comments.component';
import { ShowComponent } from './show/show.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HackerComponent,
    NewComponent,
    CommentsComponent,
    ShowComponent,
    CommentDetailComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
