import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigiviceComponent } from './components/digivice/digivice.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DigiviceComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigiviceRoutingModule {}
