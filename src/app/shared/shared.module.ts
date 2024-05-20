import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@angular/cdk/dialog';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MatNativeDateModule } from '@angular/material/core';

const modules = [
  DragDropModule,
  MatButtonToggleModule,
  MatButtonModule,
  FormsModule,
  ReactiveFormsModule,
  DialogModule,
  MatDatepickerModule,
  MatFormFieldModule,
  RouterModule,
  MatInputModule,
  MatNativeDateModule
]


const components = [NavbarComponent]
@NgModule({
  declarations: [...components, CalendarComponent],
  imports: [
    CommonModule,

    ...modules
  ],
  providers: [MatDatepickerModule],
  exports: [...modules, ...components],
})
export class SharedModule { }
