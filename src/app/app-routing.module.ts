import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
        // canLoad: [AuthGuard]
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
        // canLoad: [AuthGuard]
      },
      {
        path: 'pokedex',
        loadChildren: () =>
          import('./pokedex/pokedex.module').then((m) => m.PokedexModule),
        // canLoad: [AuthGuard]
      },
      {
        path: 'digivice',
        loadChildren: () =>
          import('./digivice/digivice.module').then((m) => m.DigiviceModule),
        // canLoad: [AuthGuard]
      },
      {
        path: 'cards',
        loadChildren: () =>
          import('./cards/cards.module').then((m) => m.CardsModule),
        // canLoad: [AuthGuard]
      },
      {
        path: 'tvShows',
        loadChildren: () =>
          import('./tv-shows/tv-shows.module').then((m) => m.TvShowsModule),
        // canLoad: [AuthGuard]
      },
      {
        path: 'forum',
        loadChildren: () =>
          import('./forum/forum.module').then((m) => m.ForumModule),
        // canLoad: [AuthGuard]
      },
      // {
      //   path: 'admin',
      //   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
      //   // canLoad: [AuthGuard],
      //   // canActivate: [PermissionGuard],
      //   data: { permissions: ['admin'] }
      // },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
