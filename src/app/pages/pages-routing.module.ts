import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CoachComponent } from './coach/coach.component';
import { EntrevistadorComponent } from './entrevistador/entrevistador.component';
import { AsignadorComponent } from './asignador/asignador.component';
import { Error404Component } from '../error404/error404.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'coach', component: CoachComponent
      },
      {
        path: 'entrevistador', component: EntrevistadorComponent
      },
      {
        path: 'asignador', component: AsignadorComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
