import { Injectable } from '@angular/core';
import { CalendarEvent } from '@shared/interfaces/calendar-event';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private events: CalendarEvent[] = [
    { Date: new Date(2024, 4, 18), Title: 'Meeting' },
    { Date: new Date(2024, 4, 20), Title: 'Conference' }
  ];

  getEvents(): CalendarEvent[] {
    return this.events;
  }

  getEventsForDate(date: Date): CalendarEvent[] {
    return this.events.filter(event => event.Date.toDateString() === date.toDateString());
  }
}
