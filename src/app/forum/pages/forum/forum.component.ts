import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ReplyModalComponent } from '../../components/reply-modal/reply-modal.component';
import { ForumService } from '../../services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
})
export class ForumComponent implements OnInit {
  username!: string;
  subject!: string;
  message!: string;

  posts: any[] = [];

  // Search
  quickSearch: string;
  searchField: FormControl;

  constructor(public dialog: MatDialog, private forumService: ForumService) {
    this.quickSearch = '';
    this.searchField = new FormControl();
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    return this.forumService.getPosts().subscribe({
      next: (posts) => (this.posts = posts),
      error: (error) => {
        console.log(error);
      },
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ReplyModalComponent, {
      width: '50rem',
      data: {
        username: this.username,
        subject: this.subject,
        message: this.message,
      },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
      this.message = result;
    });
  }
}
