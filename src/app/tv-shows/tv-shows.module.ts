import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvShowsRoutingModule } from './tv-shows-routing.module';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { MoviesComponent as DigimonMoviesComponent } from './pages/digimon/movies/movies.component';
import { SeriesComponent as DigimonSeriesComponent } from './pages/digimon/series/series.component';
import { MoviesComponent as PokemonMoviesComponent } from './pages/pokemon/movies/movies.component';
import { SeriesComponent as PokemonSeriesComponent } from './pages/pokemon/series/series.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorPipe } from './pipes/paginator.pipe';

@NgModule({
  declarations: [
    TvShowsComponent,
    DigimonMoviesComponent,
    DigimonSeriesComponent,
    PokemonMoviesComponent,
    PokemonSeriesComponent,
    CardsListComponent,
    PaginatorPipe,
  ],
  imports: [
    CommonModule,
    TvShowsRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TvShowsModule {}
