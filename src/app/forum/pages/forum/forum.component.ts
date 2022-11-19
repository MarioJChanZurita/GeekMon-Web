import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReplyModalComponent } from '../../components/reply-modal/reply-modal.component';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
})
export class ForumComponent implements OnInit {
  username!: string;
  subject!: string;
  message!: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

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
