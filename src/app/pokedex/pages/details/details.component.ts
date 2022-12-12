import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SharedService } from 'src/app/shared/services/shared.service';
import { PokedexService } from '../../services/pokedex.service';
import { MatDialog } from '@angular/material/dialog';
import { QrComponent } from '../../components/qr/qr.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  pokemon: any = {};
  filename!: string;
  pokemonFile!: Observable<any>;

  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private pokedexService: PokedexService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) =>
          this.sharedService.getPokemonsByUrl(params['pokemonUrl'])
        )
      )
      .subscribe({
        next: (pokemon) => {
          console.log(pokemon);
          const { name, sprites } = pokemon;
          this.pokemon = pokemon;
          this.pokemonFile = this.pokedexService.downloadPokemon({
            name: name,
            image: sprites.other['official-artwork'].front_default,
          });
          this.filename = `${this.pokemon.name}.pdf`;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  generateQR() {
    const { sprites } = this.pokemon;
    this.pokedexService
      .generateQR({
        image: sprites.other['official-artwork'].front_default,
      })
      .subscribe({
        next: (data) => {
          this.dialog.open(QrComponent, {
            data: {
              QR: data.qr,
            },
          });
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
