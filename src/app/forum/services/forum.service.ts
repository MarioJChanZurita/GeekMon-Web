import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ForumService {
  geekMonApi: string = environment.geekMonApi;

  constructor(private http: HttpClient) {}

  // sendPost(message: string): Observable<any> {
  //   return this.http.post<any>(`${this.geekMonApi}/sendPost}`, {});
  // }

  getPosts() {
    return of([
      {
        message: 'Hello',
        username: 'PokemonMaster',
        subject: 'Greeting',
      },
      {
        message: 'Hello',
        username: 'PokemonMaster',
        subject: 'Greeting',
      },
      {
        message: 'Hello',
        username: 'PokemonMaster',
        subject: 'Greeting',
      },
    ]);
  }
}
