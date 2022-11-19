import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [PokedexComponent, DetailsComponent],
  imports: [CommonModule, PokedexRoutingModule],
})
export class PokedexModule {}
