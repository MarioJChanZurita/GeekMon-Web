import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  pokemonApi: string = environment.pokemonApi;
  digimonApi: string = environment.digimonApi;

  constructor(private http: HttpClient) {}

  getPokemons(limit: number = 20, offset: number = 0): Observable<any> {
    return this.http.get<any>(
      `${this.pokemonApi}pokemon?limit=${limit}&offset=${offset}`
    );
  }

  getPokemonsByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  getDigimons(pageSize: number) {
    return this.http.get<any>(`${this.digimonApi}?pageSize=${pageSize}`);
  }

  getDigimonsByUrl(url: string) {
    return this.http.get<any>(url);
  }
}
