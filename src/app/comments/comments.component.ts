import { Component} from '@angular/core';
import { Comment } from '../comment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  constructor(private router: Router){}

  comments: Comment[] = [
    new Comment("Pulse","A live  album by the English progressive rock band originally released in 1995, on the label EMI in the United Kingdom.", 1),
    new Comment("Funhouse",
    "The second  album from the American rock band, released in 1970 by Elektra Records.", 2),
    new Comment("Twilight of the Thunder God",
    "Seventh album by the Swedish band, released in 2008, based on Thor's battle with the serpent Jörmungandr.", 3),
    new Comment("Dilate",
    "Her highest-selling and most acclaimed album, released in 1996.", 4),
    new Comment("Chopin - Complete Nocturnes",
    "Released in 2010, this is Engerer's own rendition of the classical composer Chopin.", 5),
    new Comment("Axis Bold As Love",
    "Second studio album by the English-American band, released in 1967.", 6)
  ];


  goToDetailPage(clickedComment: Comment) {
     this.router.navigate(['comment-detail', clickedComment.id]);
   };
}
