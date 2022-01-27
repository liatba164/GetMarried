import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import CustomersDto from 'src/app/models/CustomersDto';
import { ServCustomerService } from 'src/app/Servies/serv-customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profilCust = new CustomersDto();
  cust: any = localStorage.getItem('user');
  custnew = JSON.parse(this.cust)
  hideSign = true;
  message = "";
  url: any;

  constructor(private srv_cust: ServCustomerService, private snackBar: MatSnackBar) {
    if (this.custnew.src_profile != "")
      this.url = this.custnew.src_profile
  }

  profile = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.pattern(new RegExp(/^[a-z\u05D0-\u05EA ]+$/i))]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      phone: new FormControl('', [Validators.pattern(new RegExp("(05)[0-9]{8}")), Validators.maxLength(10)]),
    },
  )

  getErrorPhone() {
    return this.profile.get('phone')?.hasError('pattern') ? 'לא חוקי' :
      this.profile.get('phone')?.hasError('maxlength') ? 'לא חוקי' : '';

  }

  getErrorName() {
    return this.profile.get('name')?.hasError('required') ? 'שדה חובה' :
      this.profile.get('name')?.hasError('pattern') ? 'לא תקין' : '';
  }

  getErrorEmail() {
    return this.profile.get('email')?.hasError('required') ? 'שדה חובה' :
      this.profile.get('email')?.hasError('email') ? 'כתובת לא חוקית' :
        this.profile.get('email')?.hasError('pattern') ? 'כתובת לא חוקית' : '';
  }


  getErrorPassword() {
    return this.profile.get('password')?.hasError('required') ? 'שדה חובה' :
      this.profile.get('password')?.hasError('minlength') ? 'חייב להכיל שמונה תווים לפחות' : '';
  }

  ngOnInit(): void {
    this.profile.get('name')?.setValue(this.custnew.name);
    this.profile.get('email')?.setValue(this.custnew.mail);
    this.profile.get('password')?.setValue(this.custnew.password);
    this.profile.get('phone')?.setValue(this.custnew.phone);
  }


  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      console.log(event.target.files[0].name);
      reader.onload = (event) => { // called once readAsDataURL is completed
        if (event.target != null) {
          this.url = event.target.result;
        }
      }
    }
  }

  updateCustomer() {
    if (this.profile.valid) {
      const { email } = this.profile.value;
      const { name } = this.profile.value;
      const { password } = this.profile.value;
      const { phone } = this.profile.value;

      this.profilCust = JSON.parse(this.cust);
      this.profilCust.password = password;
      this.profilCust.mail = email;
      this.profilCust.name = name;
      this.profilCust.phone = phone;
      this.profilCust.src_profile = this.url;

      this.srv_cust.updateCustomer(this.profilCust).subscribe(x => {
        if (!x) {
          this.snackBar.open('לא הצלחנו לעדכן את הפרטים אנא נסה שנית', 'אישור')
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
        else {
          localStorage.removeItem('user');
          localStorage.setItem('user', JSON.stringify(this.profilCust));
          this.snackBar.open('הנתונים התעדכנו בהצלחה', 'אישור')
          setTimeout(() => {
            window.location.reload();
          }, 2000);

        }
      });



    }
  }

}
