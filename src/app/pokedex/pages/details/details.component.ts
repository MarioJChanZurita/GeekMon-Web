import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  pokemon: any = {};

  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute
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
          this.pokemon = pokemon;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
