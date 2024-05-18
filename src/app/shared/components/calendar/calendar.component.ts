import { Dialog } from '@angular/cdk/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateType } from '@shared/enums/date-type';
import { CalendarEvent } from '@shared/interfaces/calendar-event';
import { IFormDialog } from '@shared/interfaces/form-dialog';
import { DateModel } from '@shared/models/date.model';
import { CalendarService } from '@shared/services/calendar-service.service';
import { newGuid } from '@shared/utils/GUID';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';

@Component({
  selector: 'pe-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {
  @Input() events: CalendarEvent[] = [];
  @Output() dateChanged = new EventEmitter<Date>();

  schedulerData: Array<DateModel> = new Array<DateModel>();
  currentSchedulerData: DateModel = new DateModel(new Date());

  currentDateType: DateType = DateType.Month;
  DateType = DateType;
  currentDay!: number;
  currentWeek!: number;
  currentMonth!: number;
  currentYear!: number;

  selectedDate: Date = new Date();

  weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  daysInMonth: Array<{ date: Date; events: CalendarEvent[] }> = [];

  currentDisplay: string;

  dateTypes = Object.values(DateType).filter(
    (value) => typeof value === 'number'
  ) as DateType[];

  constructor(private calendarService: CalendarService, public dialog: Dialog) {
    const today = new Date();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();
    this.currentDisplay =
      this.monthNames[this.currentMonth] + ' ' + this.currentYear;
  }

  ngOnInit(): void {
    this.selectedDate = new Date(Date.now());

    this.loadMonth();
  }

  openFormDialog() {
    const dialogRef = this.dialog.open<IFormDialog>(FormDialogComponent, {
      data: new DateModel(new Date()),
      backdropClass: 'bg-light',
      autoFocus: true,
    });

    dialogRef.closed.subscribe((data) => {
      this.schedulerData.push(data as DateModel);
    });
  }

  setTodaysDate() {
    const today = new Date();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();
    this.loadMonth();
    this.dateChanged.emit(today);
  }

  dropItem(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.schedulerData,
      event.previousIndex,
      event.currentIndex
    );
  }

  getEventsForDate(date: Date): CalendarEvent[] {
    return this.calendarService.getEventsForDate(date);
  }

  loadMonth(): void {
    this.daysInMonth = [];
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);

    for (let day = firstDay.getDate(); day <= lastDay.getDate(); day++) {
      const date = new Date(this.currentYear, this.currentMonth, day);
      this.daysInMonth.push({ date, events: this.getEventsForDate(date) });
    }
    this.currentDisplay =
      this.monthNames[this.currentMonth] + ' ' + this.currentYear;
  }

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.loadMonth();
    this.dateChanged.emit(new Date(this.currentYear, this.currentMonth));
  }

  previousMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.loadMonth();
    this.dateChanged.emit(new Date(this.currentYear, this.currentMonth));
  }

  onDateTypeChange(event: any): void {
    this.currentDateType = event.value;
    this.updateCurrentDisplay();
  }

  incrementDate(): void {
    switch (this.currentDateType) {
      case DateType.Day:
        this.currentMonth++;
        this.loadMonth();
        break;
      case DateType.Week:
        // Implement week increment logic
        break;
      case DateType.Month:
        this.nextMonth();
        break;
      case DateType.Year:
        this.currentYear++;
        this.loadMonth();
        break;
    }
    this.updateCurrentDisplay();
  }

  decrementDate(): void {
    switch (this.currentDateType) {
      case DateType.Day:
        this.currentMonth--;
        this.loadMonth();
        break;
      case DateType.Week:
        // Implement week decrement logic
        break;
      case DateType.Month:
        this.previousMonth();
        break;
      case DateType.Year:
        this.currentYear--;
        this.loadMonth();
        break;
    }
    this.updateCurrentDisplay();
  }

  updateCurrentDisplay(): void {
    switch (this.currentDateType) {
      case DateType.Day:
        this.currentDisplay =
          this.monthNames[this.currentMonth] + ' ' + this.currentYear;
        break;
      case DateType.Week:
        this.currentDisplay = `Week of ${this.weekDays[new Date().getDay()]}`;
        break;
      case DateType.Month:
        this.currentDisplay =
          this.monthNames[this.currentMonth] + ' ' + this.currentYear;
        break;
      case DateType.Year:
        this.currentDisplay = this.currentYear.toString();
        break;
    }
  }

  getDateTypeName(type: DateType): string {
    return DateType[type];
  }
}
