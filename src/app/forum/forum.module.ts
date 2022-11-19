import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumComponent } from './pages/forum/forum.component';
import { MaterialModule } from '../material/material.module';
import { ReplyModalComponent } from './components/reply-modal/reply-modal.component';

@NgModule({
  declarations: [ForumComponent, ReplyModalComponent],
  imports: [CommonModule, ForumRoutingModule, MaterialModule, FormsModule],
})
export class ForumModule {}
