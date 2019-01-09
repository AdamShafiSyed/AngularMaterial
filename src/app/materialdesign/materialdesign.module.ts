import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,
   MatCheckboxModule,
    MatFormFieldModule,
     MatInputModule,
      MatSelectModule,
       MatOptionModule,
       MatCardModule,
       MatDatepickerModule,
       MatNativeDateModule,
       MatIconModule,
       MatRadioModule,
       MatDialogModule,
        } from '@angular/material';
      import { DialogOverview } from '../material/dialog';


@NgModule({
  declarations: [DialogOverview],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatRadioModule,
    MatDialogModule,
    MatButtonModule,
    ] ,
  exports : [ BrowserAnimationsModule,
     MatButtonModule,
      MatCheckboxModule,
       MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatCheckboxModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        MatRadioModule,
        MatDialogModule,
  ],
  entryComponents: [
    DialogOverview
]
})
export class MaterialdesignModule { }
