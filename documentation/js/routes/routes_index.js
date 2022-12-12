var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"auth","loadChildren":"./authentication/authentication.module#AuthenticationModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/authentication/authentication-routing.module.ts","module":"AuthenticationRoutingModule","children":[{"path":"","children":[{"path":"sign-in","component":"SignInComponent"},{"path":"sign-up","component":"SignUpComponent"},{"path":"**","redirectTo":"sign-in"}]}],"kind":"module"}],"module":"AuthenticationModule"}]},{"path":"home","canActivate":["AuthGuard"],"loadChildren":"./home/home.module#HomeModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/home/home-routing.module.ts","module":"HomeRoutingModule","children":[{"path":"","children":[{"path":"","component":"HomeComponent"},{"path":"**","redirectTo":"home"}]}],"kind":"module"}],"module":"HomeModule"}]},{"path":"pokedex","canActivate":["AuthGuard"],"loadChildren":"./pokedex/pokedex.module#PokedexModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pokedex/pokedex-routing.module.ts","module":"PokedexRoutingModule","children":[{"path":"","children":[{"path":"","component":"PokedexComponent"},{"path":"details/:pokemonUrl","component":"DetailsComponent"},{"path":"**","redirectTo":"home"}]}],"kind":"module"}],"module":"PokedexModule"}]},{"path":"digivice","canActivate":["AuthGuard"],"loadChildren":"./digivice/digivice.module#DigiviceModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/digivice/digivice-routing.module.ts","module":"DigiviceRoutingModule","children":[{"path":"","children":[{"path":"","component":"DigiviceComponent"},{"path":"**","redirectTo":""}]}],"kind":"module"}],"module":"DigiviceModule"}]},{"path":"cards","canActivate":["AuthGuard"],"loadChildren":"./cards/cards.module#CardsModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/cards/cards-routing.module.ts","module":"CardsRoutingModule","children":[{"path":"","children":[{"path":"","component":"CardsComponent"},{"path":"**","redirectTo":"home"}]}],"kind":"module"}],"module":"CardsModule"}]},{"path":"tvShows","canActivate":["AuthGuard"],"loadChildren":"./tv-shows/tv-shows.module#TvShowsModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/tv-shows/tv-shows-routing.module.ts","module":"TvShowsRoutingModule","children":[{"path":"","children":[{"path":"","component":"TvShowsComponent"},{"path":"pokemon/movies","component":"PokemonMoviesComponent"},{"path":"pokemon/series","component":"PokemonSeriesComponent"},{"path":"digimon/movies","component":"DigimonMoviesComponent"},{"path":"digimon/series","component":"DigimonSeriesComponent"},{"path":"**","redirectTo":""}]}],"kind":"module"}],"module":"TvShowsModule"}]},{"path":"forum","canActivate":["AuthGuard"],"loadChildren":"./forum/forum.module#ForumModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/forum/forum-routing.module.ts","module":"ForumRoutingModule","children":[{"path":"","children":[{"path":"","component":"ForumComponent"},{"path":"**","redirectTo":"home"}]}],"kind":"module"}],"module":"ForumModule"}]},{"path":"**","redirectTo":"home"}],"kind":"module"}]}