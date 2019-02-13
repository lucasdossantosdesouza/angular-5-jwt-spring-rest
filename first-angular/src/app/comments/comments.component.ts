import { CommentsService } from './comments.service';
import { Component, OnInit } from '@angular/core';
import { Comment} from './comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[];
  constructor(private service: CommentsService) { }

  ngOnInit() {
    this.service.getComments().subscribe(response => this.comments = response);
  }
}
