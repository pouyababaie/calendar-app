import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DaysOfWeekEnum } from '@shared/enums/days-of-week';
import { MonthEnum } from '@shared/enums/month';
import { CalendarDay } from '@shared/models/date.model';
import { EnumToArray } from '@shared/utils/HelperFunctions';

@Component({
  selector: 'pe-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {
  DaysOfWEEK = DaysOfWeekEnum;
  MONTH = MonthEnum;

  public calendar!: Array<CalendarDay>;

  @Output() onCalendarDayChange: EventEmitter<Date> = new EventEmitter();


  ngOnInit(): void {
    this.generateCalendarDays();
  }

  private generateCalendarDays(): void {
    this.calendar = [];
    let day: Date = new Date();
    let startingDateOfCalendar = this.getStartDateForCalendar(day);
    let dateToAdd = startingDateOfCalendar;

    for (let i = 0; i < 42; i++) {
      this.calendar.push(new CalendarDay(new Date(dateToAdd)));
      dateToAdd.setDate(dateToAdd.getDate() + 1);
    }
  }

  private getStartDateForCalendar(selectedDate: Date): Date {
    let lastDayOfPreviousMonth = new Date(selectedDate.setDate(0));

    // start by setting the starting date of the calendar same as the last day of previous month
    let startingDateOfCalendar: Date = lastDayOfPreviousMonth;

    // but since we actually want to find the last Monday of previous month
    // we will start going back in days until we encounter our last Monday of previous month
    if (startingDateOfCalendar.getDay() != 1) {
      do {
        startingDateOfCalendar = new Date(startingDateOfCalendar.setDate(startingDateOfCalendar.getDate() - 1));
      } while (startingDateOfCalendar.getDay() != 1);
    }

    return startingDateOfCalendar;
  }

  MonthEnumToArray(): string[] {
    return EnumToArray(DaysOfWeekEnum);
  }


  onCalendarDaySelect(input: Date) {
    this.onCalendarDayChange.emit(input)
  }
}
