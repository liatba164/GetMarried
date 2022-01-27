
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import CustomersDto from 'src/app/models/CustomersDto';
import { ServCustomerService } from 'src/app/Servies/serv-customer.service';
import Validation from 'src/app/models/Validation';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  hideLog = true;
  logInCust = new CustomersDto();
  message: string = "";

  logIn = new FormGroup({
    emaillogin: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });


  getErrorEmailLogIn() {
    return this.logIn.get('emaillogin')?.hasError('required') ? 'שדה חובה' :
      this.logIn.get('emaillogin')?.hasError('pattern') ? 'כתובת לא חוקית' : '';
  }

  getErrorPasswordLogIn() {
    return this.logIn.get('password')?.hasError('required') ? 'שדה חובה' :
      this.logIn.get('password')?.hasError('minlength') ? 'חייב להכיל שמונה תווים לפחות' : '';
  }



  constructor(private dialog: MatDialog, private servCust: ServCustomerService, private r: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {

  }

  openDialog() {
    const dialogRef = this.dialog.open(ForgetPasswordComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

    });
  }

  logInSubmit() {
    this.message = "";
    if (this.logIn.status == "VALID") {
      const { emaillogin } = this.logIn.value;
      const { password } = this.logIn.value;
      var newEmail = emaillogin
      newEmail = newEmail.replace(/\./gi, "{}");
      newEmail = newEmail.replace(/\@/gi, "[]");

      this.servCust.GetCustomerByMail(newEmail).subscribe(res => {
        this.logInCust = res

        if (this.logInCust == null || this.logInCust.password != password || this.logInCust.mail != emaillogin)
          this.message = "שם משתמש או סיסמא אינם נכונים";

        else {
          if (this.logInCust.id == 1)
            localStorage.setItem('manager', JSON.stringify(this.logInCust));
          else
            localStorage.setItem('user', JSON.stringify(this.logInCust));
          this.r.navigate(['/']).then(() => {
            window.location.reload();
          });;
        }

      });
    }
  }


}