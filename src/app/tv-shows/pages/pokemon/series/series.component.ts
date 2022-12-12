import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TvShowsService } from 'src/app/tv-shows/services/tv-shows.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  subscription!: Subscription;
  series: any[] = [];
  isLoading: boolean = true;

  constructor(private tvShowsService: TvShowsService) {}

  ngOnInit(): void {
    this.getSeries();
  }

  /**
   * Obtiene todas las series de pokemon de la pokeApi
   */
  getSeries() {
    this.isLoading = true;
    this.subscription && this.subscription.unsubscribe();
    this.subscription = this.tvShowsService.getSeries('digimon').subscribe({
      next: ({ results }) => {
        this.series = results;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
