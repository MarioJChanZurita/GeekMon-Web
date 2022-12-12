import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumComponent } from './pages/forum/forum.component';
import { MaterialModule } from '../material/material.module';
import { ReplyModalComponent } from './components/reply-modal/reply-modal.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';

@NgModule({
  declarations: [ForumComponent, ReplyModalComponent, EditModalComponent],
  imports: [
    CommonModule,
    ForumRoutingModule,
    MaterialModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ForumModule {}
