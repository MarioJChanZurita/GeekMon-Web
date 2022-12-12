import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { TvShowsService } from 'src/app/tv-shows/services/tv-shows.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  subscription!: Subscription;
  movies: any[] = [];
  isLoading: boolean = true;

  constructor(private tvShowsService: TvShowsService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  /**
   * Obtiene todas las peliculas de digimon de la digiApi
   */
  getMovies() {
    this.isLoading = true;
    this.subscription && this.subscription.unsubscribe();
    this.subscription = this.tvShowsService.getMovies('digimon').subscribe({
      next: ({ results }) => {
        this.movies = results;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
