import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HomeComponent implements OnInit {
  subsPokemons!: Subscription;
  subsDigimons!: Subscription;
  pokemons: any[] = [];
  digimons: any[] = [];
  isLoading: boolean = true;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    document.body.className = 'selector';
    this.getPokemons();
    this.getDigimons();
  }

  /**
   * Obtiene todos los pokemons para mostrarlos en el carousel
   */
  getPokemons() {
    this.subsPokemons && this.subsPokemons.unsubscribe();
    this.isLoading = true;
    this.subsPokemons = this.sharedService.getPokemons().subscribe({
      next: ({ results }) => {
        for (let pokemon of results) {
          this.sharedService.getPokemonsByUrl(pokemon.url).subscribe({
            next: ({ id, name, sprites }) => {
              this.pokemons.push({
                id: id,
                name: name,
                image: sprites.other['official-artwork'].front_default,
              });
              this.isLoading = false;
            },
            error: () => {
              this.pokemons = [];
              this.isLoading = false;
            },
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.pokemons = [];
        this.isLoading = false;
      },
    });
  }

  /**
   * Obtiene todos los digimons para mostrarlos en el carousel
   */
  getDigimons() {
    this.subsDigimons && this.subsDigimons.unsubscribe();
    this.isLoading = true;
    this.subsDigimons = this.sharedService.getDigimons(20).subscribe({
      next: ({ content }) => {
        for (let digimon of content) {
          this.sharedService.getDigimonsByUrl(digimon.href).subscribe({
            next: ({ id, name, images }) => {
              this.digimons.push({
                id: id,
                name: name,
                image: images[0].href,
              });
              this.isLoading = false;
            },
            error: () => {
              this.digimons = [];
              this.isLoading = false;
            },
          });
        }
        console.log(this.digimons);
        this.isLoading = false;
      },
      error: () => {
        this.digimons = [];
        this.isLoading = false;
      },
    });
  }

  /**
   * Desuscribe de los observables
   */
  ngOnDestroy() {
    document.body.className = '';
    this.subsPokemons && this.subsPokemons.unsubscribe();
    this.subsDigimons && this.subsDigimons.unsubscribe();
  }
}
