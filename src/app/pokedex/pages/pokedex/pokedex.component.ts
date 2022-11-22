import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  subsPokemons!: Subscription;
  pokemons: any[] = [];
  isLoading: boolean = true;
  noPages: number = 0;
  limitPerPage: number = 10;

  nextPage: string = '';
  previousPage: string = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.subsPokemons = this.sharedService
      .getPokemons(this.limitPerPage)
      .subscribe({
        next: ({ count, next, previous, results }) => {
          this.noPages = Math.ceil(count / this.limitPerPage);
          this.nextPage = next;
          this.previousPage = previous;
          for (let pokemon of results) {
            this.getPokemonDetails(pokemon.url);
          }
          this.isLoading = false;
        },
        error: () => {
          this.pokemons = [];
          this.isLoading = false;
        },
      });
  }

  getPokemons(noPage: string) {
    this.subsPokemons && this.subsPokemons.unsubscribe();
    this.subsPokemons = this.sharedService.getPokemonsByUrl(noPage).subscribe({
      next: ({ next, previous, results }) => {
        this.nextPage = next;
        this.previousPage = previous;
        for (let pokemon of results) {
          this.getPokemonDetails(pokemon.url);
        }
        this.isLoading = false;
      },
      error: () => {
        this.pokemons = [];
        this.isLoading = false;
      },
    });
  }

  getPokemonDetails(url: any) {
    this.sharedService.getPokemonsByUrl(url).subscribe({
      next: ({ id, name, sprites, types, abilities }) => {
        this.pokemons.push({
          id: id,
          name: name,
          image: sprites.other['official-artwork'].front_default,
          type: types[0].type.name,
          ability: abilities[0].ability.name,
          url: url,
        });

        this.isLoading = false;
      },
      error: () => {
        this.pokemons = [];
        this.isLoading = false;
      },
    });
  }

  changePage(pageUrl: string) {
    this.pokemons = [];
    this.getPokemons(pageUrl);
  }
}
