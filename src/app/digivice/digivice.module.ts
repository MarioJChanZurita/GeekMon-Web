import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigiviceRoutingModule } from './digivice-routing.module';
import { DigiviceComponent } from './components/digivice/digivice.component';


@NgModule({
  declarations: [
    DigiviceComponent
  ],
  imports: [
    CommonModule,
    DigiviceRoutingModule
  ]
})
export class DigiviceModule { }
