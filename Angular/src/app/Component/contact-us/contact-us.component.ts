import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import ContactUsDto from 'src/app/models/ContactUsDto';
import { ContactUsService } from 'src/app/Servies/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {


  Send_Review = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    name: new FormControl('', [Validators.required,Validators.pattern(new RegExp(/^[a-z\u05D0-\u05EA ]+$/i))]),
    phone: new FormControl('', [Validators.required, Validators.pattern(new RegExp("(05)[0-9]{8}")), Validators.maxLength(10)]),
    message: new FormControl('', ),
  });


  Submit() {

    if (this.Send_Review.valid) {
      let contact = new ContactUsDto();
      const { email } = this.Send_Review.value;
      const { name } = this.Send_Review.value;
      const { message } = this.Send_Review.value;
      const { phone } = this.Send_Review.value;
      contact.message = message;
      contact.email = email;
      contact.name = name;
      contact.phone = phone;

      this.contactSrv.PostContact(contact).subscribe(x => {
        if (x == true)
          this._snackBar.open('תודה אנחנו נחזור אליך בהקדם', 'אישור', {
            duration: 2000,
          });
        else
          this._snackBar.open('אישור','חלה שגיאה אנא נסה שנית')
      });

    }
  }

  getMessageError() {
    return this.Send_Review.get('name')?.hasError('required') ? 'שדה חובה' : '';
  }
  getNameError() {
    return this.Send_Review.get('name')?.hasError('required') ? 'שדה חובה' : 
    this.Send_Review.get('name')?.hasError('pattern') ? 'לא תקין' : '';
  }
  getErrorPhone() {
    return this.Send_Review.get('phone')?.hasError('required') ? 'שדה חובה' :
      this.Send_Review.get('phone')?.hasError('pattern') ? 'לא חוקי' :
        this.Send_Review.get('phone')?.hasError('maxLength') ? 'לא חוקי' : '';
  }

  getErrorEmail() {
    return this.Send_Review.get('email')?.hasError('required') ? 'שדה חובה' :
      this.Send_Review.get('email')?.hasError('pattern') ? 'כתובת לא חוקית' : '';
  }

  constructor(private contactSrv: ContactUsService, private _snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
  }

}
