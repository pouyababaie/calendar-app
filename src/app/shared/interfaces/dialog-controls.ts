import { FormControl } from '@angular/forms';

export interface DialogControls {
  Date: FormControl<Date | null>;
  Id: FormControl<string | null>;
  Title: FormControl<string | null>;
  Description: FormControl<string | null>;
}
