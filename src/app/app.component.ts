import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AppService } from 'src/app.service';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string | undefined = 'Home';
  isLogged: boolean = false;

  constructor(
    // private location: Location,
    private router: Router,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    if (!this.title) this.title = window.location.href.split('/').at(-1);
    this.navigateToScreen(this.title);
    this.isLogged = this.appService.isLogin();
    // this.router.events.subscribe((event) => {
    //   this.title = 'Home';
    // });
  }

  screens = [
    { route: '/home', display: 'Home', icon: 'home.png' },
    { route: '/pokedex', display: 'Pokedex', icon: 'pokemon.png' },
    { route: '/digivice', display: 'Digivice', icon: 'digimon.png' },
    { route: '/cards', display: 'Cards', icon: 'cards.png' },
    { route: '/tvShows', display: 'TV Shows', icon: 'tv-show.png' },
    { route: '/forum', display: 'Forum', icon: 'forum.png' },
  ];

  /**
   * Navegar hacia pagina
   */
  navigateToScreen(screenName?: string, sidenav?: MatSidenav) {
    if (sidenav) sidenav.toggle();
    this.title = screenName;
  }

  /**
   * Desloguea al usuario
   */
  logout() {
    this.appService.logout();
  }
}
