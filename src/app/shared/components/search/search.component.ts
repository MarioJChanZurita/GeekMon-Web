// import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
// import {
//   debounceTime,
//   delay,
//   distinctUntilChanged,
//   map,
//   mergeMap,
//   repeat,
//   tap,
// } from 'rxjs/operators';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  // public filterTerm: FormControl;

  // constructor() {
  //   this.filterTerm = new FormControl('');
  //   this.filterTerm.valueChanges
  //     .pipe(
  //       // Tiempo entre eventos
  //       debounceTime(1500),
  //       // si el query es diferente al anterior
  //       distinctUntilChanged()
  //     )
  //     .subscribe({
  //       next: () => this.searchData(),
  //     });
  // }

  // ngOnInit(): void {}

  // searchData() {
  //   this.filterTerm.value().trim();
  // }

  @Input() placeholder = '';
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Output() onSubmit: EventEmitter<string> = new EventEmitter();
  debounce: Subject<string> = new Subject();
  searchInput: FormControl = new FormControl();
  constructor() {}

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(400))
      .subscribe((value) => this.onDebounce.emit(value));
  }

  /**
   * Monitorea evento de presionado de tecla
   */
  keyPressed() {
    this.debounce.next(this.searchInput.value);
  }

  /**
   * Hace la busqueda
   */
  searchBox() {
    this.onSubmit.emit(this.searchInput.value);
  }
}
