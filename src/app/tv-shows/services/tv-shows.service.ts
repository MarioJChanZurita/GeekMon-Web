import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  moviesApi: string = environment.moviesApi;

  constructor(private httpClient: HttpClient) {}

  getMovies(subject: string) {
    return this.httpClient.get<any>(
      `${this.moviesApi}/searchmovie/k_4lwb2jzp/${subject}`
    );
  }

  getSeries(subject: string) {
    return this.httpClient.get<any>(
      `${this.moviesApi}/searchseries/k_4lwb2jzp/${subject}`
    );
  }
}
