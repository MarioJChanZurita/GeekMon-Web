import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { DetailsComponent } from './pages/details/details.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { QrComponent } from './components/qr/qr.component';

@NgModule({
  declarations: [PokedexComponent, DetailsComponent, QrComponent],
  imports: [CommonModule, PokedexRoutingModule, SharedModule, MaterialModule],
})
export class PokedexModule {}
