import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@angular/cdk/dialog';

@NgModule({
  declarations: [CalendarComponent, FormDialogComponent],
  imports: [
    CommonModule,
    CdkDrag,
    DragDropModule,
    MatButtonToggleModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
  ],
  exports: [CalendarComponent, FormDialogComponent],
})
export class SharedModule {}
