import { newGuid } from '@shared/utils/GUID';

export class DateModel {
  Date: Date;
  Id: string;
  Title: string = '';
  Description: string = '';
  constructor(date: Date, title: string = '', desc: string = '') {
    this.Date = date;
    this.Id = newGuid();
    this.Title = title;
    this.Description = desc;
  }
}
