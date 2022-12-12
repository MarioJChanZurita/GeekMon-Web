import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, throwError } from 'rxjs';
import { AppService } from 'src/app.service';
import { EditModalComponent } from '../../components/edit-modal/edit-modal.component';
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
  isOwner: boolean;

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
    this.username = this.appService.username;
    this.isOwner = false;
  }

  ngOnInit(): void {
    this.getPosts();
  }

  /**
   * Obtiene todos los mensajes
   */
  getPosts() {
    return this.forumService.getMessages().subscribe({
      next: ({ messages }) => {
        this.messages = messages;
      },
      error: (err) => throwError(() => err),
    });
  }

  /**
   * Envia mensaje nuevo
   */
  sendMessage(): void {
    const dialogRef = this.dialog.open(ReplyModalComponent, {
      width: '50rem',
      data: {
        username: this.username,
        // message: this.message,
      },
    });

    dialogRef.afterClosed().subscribe({
      next: (message) => {
        if (!message) return;
        const userId = this.appService.userId;
        this.forumService.sendMessage(userId, message).subscribe({
          next: (res) => {
            this.getPosts();
          },
          error: (err) => throwError(() => err),
        });
      },
      error: (err) => throwError(() => err),
    });
  }

  /**
   * Actualiza mensaje enviado previamente
   */
  editMessage(message: any): void {
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '50rem',
      data: {
        username: this.username,
        message: message.content,
        id: message._id,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(
        map((msg) => {
          if (!msg) return;
          this.forumService.editMessage(msg.id, msg.message);
        })
      )
      .subscribe({
        next: (res) => {
          this.getPosts();
        },
        error: (err) => throwError(() => err),
      });
  }

  /**
   * Elimina un determinado mensaje
   */
  removeMessage(id: string): void {
    this.forumService.deleteMessage(id).subscribe({
      next: () => this.getPosts(),
      error: (err) => throwError(() => err),
    });
  }
}
