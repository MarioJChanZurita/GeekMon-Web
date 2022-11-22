import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css'],
})
export class CardsListComponent implements OnInit {
  // Data
  @Input() items: any[] = [];
  subscription!: Subscription;
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
}
