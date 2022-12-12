// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pokemonApi: 'https://pokeapi.co/api/v2/',
  digimonApi: 'https://www.digi-api.com/api/v1/digimon',
  moviesApi: 'https://imdb-api.com/api',
  geekMonApi: 'http://localhost:8080', // project api
  cardApi: 'https://api.pokemontcg.io/v2/cards?q=name:gardevoir',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
