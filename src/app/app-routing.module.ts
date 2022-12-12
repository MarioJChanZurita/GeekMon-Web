import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PermissionGuard } from './permission.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'pokedex',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pokedex/pokedex.module').then((m) => m.PokedexModule),
  },
  {
    path: 'digivice',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./digivice/digivice.module').then((m) => m.DigiviceModule),
  },
  {
    path: 'cards',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./cards/cards.module').then((m) => m.CardsModule),
  },
  {
    path: 'tvShows',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./tv-shows/tv-shows.module').then((m) => m.TvShowsModule),
  },
  {
    path: 'forum',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./forum/forum.module').then((m) => m.ForumModule),
    // canActivate: [PermissionGuard],
    // data: { permissions: ['geek'] },
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
