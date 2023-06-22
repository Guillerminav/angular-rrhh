import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { CoachComponent } from './coach/coach.component';
import { MaterialModule } from '../material/material.module';
import { PagesRoutingModule } from './pages-routing.module';





@NgModule({
  declarations: [
    LayoutComponent,
    CoachComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
