import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import CustomersDto from 'src/app/models/CustomersDto';
import { ForgetPasswordService } from 'src/app/Servies/forget-password.service';
import { LoadingService } from 'src/app/Servies/loading.service';
import { ServCustomerService } from 'src/app/Servies/serv-customer.service';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  message = "";
  newPass: string = "";
  cust = new CustomersDto();

  loading$ = this.loader.loading$;

  ForgetPassword = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
  });


  constructor(public loader: LoadingService, private _snackBar: MatSnackBar, private dialogRef: MatDialogRef<LogInComponent>, private servCust: ServCustomerService, private servMail: ForgetPasswordService) {

  }

  getErrorEmail() {
    return this.ForgetPassword.get('email')?.hasError('required') ? 'שדה חובה' :
      this.ForgetPassword.get('email')?.hasError('pattern') ? 'כתובת לא חוקית' : '';
  }

  sendEmail() {
    this.message = "";
    const { value, valid } = this.ForgetPassword;

    if (valid) {
      const { email } = this.ForgetPassword.value;
      var newEmail = email;
      newEmail = newEmail.replace(/\./gi, "{}");
      newEmail = newEmail.replace(/\@/gi, "[]");
      this.servCust.GetCustomerByMail(newEmail).subscribe(res => {

        this.cust = res

        if (this.cust == null || this.cust.mail != email)
          this.message = "שם משתמש לא קיים במערכת";

        else if (this.cust != null && this.cust.mail == email) {
          this.servMail.sendMail(newEmail, this.cust.name).subscribe(x => {
            if (x == null) {
              this.dialogRef.close(); this._snackBar.open('חלה שגיאה בשליחת המייל, אנא נסה שנית', '')
            }
            else {
              this.newPass = x
              this.cust.password = this.newPass;
              this.servCust.updateCustomer(this.cust).subscribe(x => {
                if (x == true) {
                  this.dialogRef.close();
                  this._snackBar.open('המייל נשלח בהצלחה', 'אישור')

                }
                else {
                  this.dialogRef.close(); this._snackBar.open('חלה שגיאה בשליחת המייל, אנא נסה שנית', '')
                }
              });
            }
          });
        }
      });
    }
  }

  ngOnInit(): void {
  }

}
