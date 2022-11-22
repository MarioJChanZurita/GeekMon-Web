import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from '../tv-shows/pages/pokemon/series/series.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [SearchComponent, SearchPipe],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SearchComponent, SearchPipe],
})
export class SharedModule {}
