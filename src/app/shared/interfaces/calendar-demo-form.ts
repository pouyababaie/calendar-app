import {  EmailValidator, FormControl } from "@angular/forms";

export interface ICalendarDemoFormGroup {

    FirstName:FormControl<string>,
    LastName:FormControl<string>,
    BirthDay:FormControl<Date>,
    AttendDate:FormControl<string>,
    Email:FormControl<EmailValidator>,
}
