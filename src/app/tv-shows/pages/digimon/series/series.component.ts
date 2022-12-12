import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { TvShowsService } from 'src/app/tv-shows/services/tv-shows.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  // Data
  subscription!: Subscription;
  series: any[] = [];
  isLoading: boolean = true;

  // Pagination
  noPages: number = 0;
  limitPerPage: number = 5;
  totalItems: number = 0;
  pageIndex: number = 0;

  // Search
  quickSearch: string;
  searchField: FormControl;

  constructor(private tvShowsService: TvShowsService) {
    this.quickSearch = '';
    this.searchField = new FormControl();
  }

  ngOnInit(): void {
    this.getSeries();
    this.searchField.valueChanges
      .pipe(
        // Tiempo entre eventos
        debounceTime(400),
        // si el query es diferente al anterior
        distinctUntilChanged()
      )
      .subscribe({
        next: (res: string) => (this.quickSearch = res.trim()),
      });
  }

  /**
   * Obtiene todas las series de digimon de la digiApi
   */
  getSeries() {
    this.isLoading = true;
    this.subscription && this.subscription.unsubscribe();
    this.subscription = this.tvShowsService.getSeries('digimon').subscribe({
      next: ({ results }) => {
        this.totalItems = results.length;
        this.noPages = Math.ceil(results.length / this.limitPerPage);
        this.series = results;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
