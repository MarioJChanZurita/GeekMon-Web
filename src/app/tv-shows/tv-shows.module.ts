import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvShowsRoutingModule } from './tv-shows-routing.module';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';

@NgModule({
  declarations: [TvShowsComponent],
  imports: [CommonModule, TvShowsRoutingModule],
})
export class TvShowsModule {}
