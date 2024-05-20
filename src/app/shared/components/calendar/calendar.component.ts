import { Component } from '@angular/core';
import { DaysOfWeekEnum } from '@shared/enums/days-of-week';

@Component({
  selector: 'pe-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  DaysOfWEEK = DaysOfWeekEnum;
}
