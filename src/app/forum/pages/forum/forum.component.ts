import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { throwError } from 'rxjs';
import { AppService } from 'src/app.service';
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

  messages: any[] = [];

  // Search
  quickSearch: string;
  searchField: FormControl;

  constructor(
    public dialog: MatDialog,
    private forumService: ForumService,
    private appService: AppService
  ) {
    this.quickSearch = '';
    this.searchField = new FormControl();
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    return this.forumService.getMessages().subscribe({
      next: (messages) => (this.messages = messages),
      error: (error) => {
        console.log(error);
      },
    });
  }

  sendMessage(): void {
    const dialogRef = this.dialog.open(ReplyModalComponent, {
      width: '50rem',
      data: {
        username: this.username,
        message: this.message,
      },
    });

    dialogRef.afterClosed().subscribe({
      next: (result) => {
        console.log(result);
        const userId = this.appService.getUserId();
        console.log(userId);
        this.forumService.sendMessage(userId, result).subscribe({
          next: (res) => {
            window.location.reload();
          },
          error: () => {},
        });
      },
      error: (err) => throwError(() => err),
    });
  }
}
