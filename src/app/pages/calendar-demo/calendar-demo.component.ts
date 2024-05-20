import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ICalendarDemoFormGroup } from '@shared/interfaces/calendar-demo-form';
import { LocalStorageService } from '@shared/services/localstorage.service';


const LocalStorageKey: string = "formData";
@Component({
  selector: 'pe-calendar-demo',
  templateUrl: './calendar-demo.component.html',
  styleUrl: './calendar-demo.component.scss'
})
export class CalendarDemoComponent {

  form!: FormGroup<ICalendarDemoFormGroup>;

  selectedDate: Date = new Date();
  constructor(private localStorageService: LocalStorageService) {
    this.form = new FormGroup<ICalendarDemoFormGroup>({
      LastName: new FormControl(),
      FirstName: new FormControl(),
      AttendDate: new FormControl(),
      BirthDay: new FormControl(),
      Email: new FormControl()
    });


  }


  submit() {
    const formValue = this.form.value;
    this.localStorageService.saveData(LocalStorageKey, JSON.stringify(formValue))
  }

  setDataFromLocalStorage() {
    const initialFormData = this.localStorageService.getData(LocalStorageKey)
    this.form.setValue({
      Email: initialFormData.Email,
      AttendDate: initialFormData.AttendDate,
      BirthDay: initialFormData.BirthDay,
      FirstName: initialFormData.FirstName,
      LastName: initialFormData.LastName,

    });
  }

  onSelectedDateChange(input: Date) {
    this.selectedDate = new Date(input.setHours(0, 0, 0, 0));
  }
}
