import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  pokemons : any[] = [];
  constructor(private sharedService: SharedService,private http:HttpClient) {}

  ngOnInit(): void {
    this.getC().subscribe(resp => {
      this.pokemons.push(resp);
      
      
    },)
  }

  
  getC(){
    return this.http.get(this.sharedService.cardsApi)
  }




}
