import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './components/cards/cards.component';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';


@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule
  ]
})
export class CardsModule {
  pokemons : any[] = [];
  constructor(private sharedService: SharedService,private http:HttpClient) {}
  
  ngOnInit(): void {
    this.isLoading = true;

   
    
    let variable = {};
    this.getC().subscribe(resp => {
      this.pokemons.push(resp);
      
      
    },)
   
    

  }

  getC(){
    return this.http.get(this.sharedService.cardsApi)
  }



  getCards(noPage: string) {
    this.Pokemons && this.Pokemons.unsubscribe();
    this.Pokemons = this.sharedService.getCards().subscribe({
      
      error: () => {
        this.pokemons = [];
        this.isLoading = false;
      },
    });
  }
}
