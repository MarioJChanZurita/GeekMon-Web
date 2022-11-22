import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent as PokemonMoviesComponent } from './pages/pokemon/movies/movies.component';
import { MoviesComponent as DigimonMoviesComponent } from './pages/digimon/movies/movies.component';

import { SeriesComponent as PokemonSeriesComponent } from './pages/pokemon/series/series.component';
import { SeriesComponent as DigimonSeriesComponent } from './pages/digimon/series/series.component';

import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TvShowsComponent,
      },
      {
        path: 'pokemon/movies',
        component: PokemonMoviesComponent,
      },
      {
        path: 'pokemon/series',
        component: PokemonSeriesComponent,
      },
      {
        path: 'digimon/movies',
        component: DigimonMoviesComponent,
      },
      {
        path: 'digimon/series',
        component: DigimonSeriesComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvShowsRoutingModule {}
