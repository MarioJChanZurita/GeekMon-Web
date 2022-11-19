import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  moviesApi: string = environment.moviesApi;

  constructor(private httpClient: HttpClient) {}

  getPokemonMovies() {
    this.httpClient.get<any>(
      `${this.moviesApi}/searchmovie/k_4lwb2jzp/pokemon`
    );
  }

  getPokemonSeries() {
    this.httpClient.get<any>(
      `${this.moviesApi}/searchseries/k_4lwb2jzp/pokemon`
    );
  }

  getDigimonMovies() {
    this.httpClient.get<any>(
      `${this.moviesApi}/searchmovie/k_4lwb2jzp/digimon`
    );
  }

  getDigimonSeries() {
    this.httpClient.get<any>(
      `${this.moviesApi}/searchseries/k_4lwb2jzp/digimon`
    );
  }
}
