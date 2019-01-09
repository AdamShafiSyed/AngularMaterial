import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject, Component } from '@angular/core';

@Component({
    selector: 'app-dialog',
    templateUrl: 'dialog-overview.html',
  })
  // tslint:disable-next-line:component-class-suffix
  export class DialogOverview {
    constructor(
      public dialogRef: MatDialogRef<DialogOverview>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}
    onNoClick(): void {
      this.dialogRef.close();
    }
}
