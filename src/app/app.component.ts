import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Home';

  screens = [
    { route: '/home', display: 'Home' },
    { route: '/pokedex', display: 'Pokedex' },
    { route: '/digivice', display: 'Digivice' },
    { route: '/cards', display: 'Cards' },
    { route: '/tvShows', display: 'TV Shows' },
    { route: '/forum', display: 'Forum' },
  ];

  toggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }

  navigateToScreen(screenName: string) {
    this.title = screenName;
  }
}
