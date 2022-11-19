import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigiviceComponent } from './pages/digivice/digivice.component';

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
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigiviceRoutingModule {}
