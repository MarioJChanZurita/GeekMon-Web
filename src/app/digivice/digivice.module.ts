import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigiviceRoutingModule } from './digivice-routing.module';
import { DigiviceComponent } from './pages/digivice/digivice.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [DigiviceComponent],
  imports: [CommonModule, DigiviceRoutingModule, SharedModule, MaterialModule],
})
export class DigiviceModule {}
