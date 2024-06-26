import { Pipe, PipeTransform } from '@angular/core';
import { CalendarDay } from '@shared/models/date.model';

@Pipe({
  name: 'chunk'
})
export class ChunkPipe implements PipeTransform {

  transform(calendarDaysArray: CalendarDay[], chunkSize: number): any {
    let calendarDays: CalendarDay[] = [];
    let weekDays: any = [];

    calendarDaysArray.map((day:any, index:number) => {
      weekDays.push(day);
      // here we need to use ++ in front of the variable else index increase 
      //will happen after the evaluation but we need it to happen BEFORE
      if (++index % chunkSize === 0) {
        calendarDays.push(weekDays);
        weekDays = [];
      }
    });
    return calendarDays;

  }

}
