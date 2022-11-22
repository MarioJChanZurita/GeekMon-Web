import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string | undefined = 'Home';

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!this.title) this.title = window.location.href.split('/').at(-1);
    this.navigateToScreen(this.title);
  }

  screens = [
    { route: '/home', display: 'Home', icon: 'home.png' },
    { route: '/pokedex', display: 'Pokedex', icon: 'pokemon.png' },
    { route: '/digivice', display: 'Digivice', icon: 'digimon.png' },
    { route: '/cards', display: 'Cards', icon: 'cards.png' },
    { route: '/tvShows', display: 'TV Shows', icon: 'tv-show.png' },
    { route: '/forum', display: 'Forum', icon: 'forum.png' },
  ];

  navigateToScreen(screenName?: string, sidenav?: MatSidenav) {
    if (sidenav) sidenav.toggle();
    this.title = screenName;
  }
}
