import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CalendarDemoComponent } from './calendar-demo/calendar-demo.component';
import { RouterModule, Routes } from '@angular/router';
const PagesRoutes: Routes = [
  {
    path: 'calendar-demo',
    component: CalendarDemoComponent
  }
]


@NgModule({
  declarations: [
    CalendarDemoComponent
  ],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(PagesRoutes)
  ]
})
export class PagesModule { }
