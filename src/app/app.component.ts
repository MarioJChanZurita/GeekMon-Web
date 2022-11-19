import { Component, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Home';

  screens = [
    { route: '/home', display: 'Home', icon: 'home.png' },
    { route: '/pokedex', display: 'Pokedex', icon: 'pokemon.png' },
    { route: '/digivice', display: 'Digivice', icon: 'digimon.png' },
    { route: '/cards', display: 'Cards', icon: 'cards.png' },
    { route: '/tvShows', display: 'TV Shows', icon: 'tv-show.png' },
    { route: '/forum', display: 'Forum', icon: 'forum.png' },
  ];

  navigateToScreen(screenName: string, sidenav: MatSidenav) {
    sidenav.toggle();
    this.title = screenName;
  }
}
