import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  geekMonApi: string = environment.geekMonApi;

  constructor(private http: HttpClient) {}

  downloadPokemon(pokemon: any): Observable<any> {
    return this.http.post<any>(`${this.geekMonApi}/pokemon/download`, pokemon);
  }

  generateQR(pokemon: any): Observable<any> {
    return this.http.post<any>(`${this.geekMonApi}/pokemon/qr`, pokemon);
  }
}
