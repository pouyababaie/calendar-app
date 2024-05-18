import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DialogControls } from '@shared/interfaces/dialog-controls';
import { IFormDialog } from '@shared/interfaces/form-dialog';

@Component({
  selector: 'pe-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrl: './form-dialog.component.scss',
})
export class FormDialogComponent {
  formData!: IFormDialog;
  form!: FormGroup<DialogControls>;

  constructor(
    public dialogRef: DialogRef<IFormDialog>,
    @Inject(DIALOG_DATA) public data: IFormDialog
  ) {
    this.formData = data;
    this.form = new FormGroup<DialogControls>({
      Date: new FormControl<Date>(data.Date),
      Description: new FormControl<string>(data.Description),
      Id: new FormControl<string>(data.Id),
      Title: new FormControl<string>(data.Title),
    });
  }

  Close() {
    this.dialogRef.close();
  }

  Submit() {
    this.formData = this.form.value as IFormDialog;
    this.dialogRef.close(this.formData);
  }
}
