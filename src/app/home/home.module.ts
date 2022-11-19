import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [HomeComponent, CarouselComponent],
  imports: [CommonModule, HomeRoutingModule, MatProgressSpinnerModule],
})
export class HomeModule {}
