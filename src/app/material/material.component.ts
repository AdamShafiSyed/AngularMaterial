import { Component, OnInit } from '@angular/core';

import {FormControl, NgForm, Validators} from '@angular/forms';

import { MyErrorStateMatcher } from './MyErrorStateMatcher';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DialogOverview } from './dialog';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit  {
// checked = false;
// indeterminate = false;
// labelposition = 'after';
// disabled =  false;
  firstname: FormControl;
  lastname: FormControl;
  phone: FormControl;
  dob: FormControl;
  email: FormControl;
  password: FormControl;
  hide = true;
  gender: FormControl;
  select: FormControl;
  city: FormControl;
  state: FormControl;
  pincode: FormControl;
  courses: string[] = [ 'Java', 'Javascript', 'Angular', 'NodeJs'];
  matcher = new MyErrorStateMatcher();
  students: string[] = [];
  constructor(private dialog: MatDialog) { }
  ngOnInit() {
    this.firstname = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.lastname = new FormControl('', Validators.required);
    this.phone = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.dob = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.gender = new FormControl('', Validators.required);
    this.select = new FormControl('', Validators.required);
    this.state = new FormControl('', Validators.required);
    this.city = new FormControl('', Validators.required);
    this.pincode = new FormControl('', [Validators.required, Validators.minLength(6)]);


  }
  onregister(): void {
    const dialogRef = this.dialog.open(DialogOverview, {
      width: '250px',
      data: {
        Firstname : this.firstname.value,
        Lastname : this.lastname.value,
Mobilenumber : this.phone.value,
        Email : this.email.value,
        password : this.password.value,
        gender : this.gender.value,
        State : this.state.value,
        City : this.city.value,
        Pincode : this.pincode.value,
        Dateofbirth : this.dob.value,
        course : this.select.value,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
