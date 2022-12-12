import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from '../tv-shows/pages/pokemon/series/series.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { DownloadFile } from './directives/download-file.directive';

@NgModule({
  declarations: [SearchComponent, SearchPipe, DownloadFile],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SearchComponent, SearchPipe, DownloadFile],
})
export class SharedModule {}
