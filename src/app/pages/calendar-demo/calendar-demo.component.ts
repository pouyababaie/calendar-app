import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ICalendarDemoFormGroup } from '@shared/interfaces/calendar-demo-form';
import { LocalStorageService } from '@shared/services/localstorage.service';

@Component({
  selector: 'pe-calendar-demo',
  templateUrl: './calendar-demo.component.html',
  styleUrl: './calendar-demo.component.scss'
})
export class CalendarDemoComponent {

  form!: FormGroup<ICalendarDemoFormGroup>;

  constructor(localStorageService: LocalStorageService) {
    this.form = new FormGroup<ICalendarDemoFormGroup>({
      LastName:new FormControl(),
      FirstName:new FormControl(),
      AttendDate:new FormControl(),
      BirthDay:new FormControl(),
      Email: new FormControl()
    });

  }


  submit(){}
}
