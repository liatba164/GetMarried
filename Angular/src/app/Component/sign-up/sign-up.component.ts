import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import CustomersDto from 'src/app/models/CustomersDto';
import Validation from 'src/app/models/Validation';
import { ServCustomerService } from 'src/app/Servies/serv-customer.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  hideSign = true;
  hideSign2 = true;
  signInCust = new CustomersDto();
  message = "";


  constructor(private snackBar: MatSnackBar, private servCust: ServCustomerService, private r: Router) {}


  signIn = new FormGroup(
    {
      name: new FormControl('', [Validators.required,Validators.pattern(new RegExp(/^[a-z\u05D0-\u05EA ]+$/i))]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      phone: new FormControl('', [Validators.pattern(new RegExp("(05)[0-9]{8}")), Validators.maxLength(10)]),
    },
    {
      validators: [Validation.match('password', 'confirmPassword')],
    }

  )




  getNameError() {
    return this.signIn.get('name')?.hasError('required') ? 'שדה חובה' :
    this.signIn.get('name')?.hasError('pattern') ? 'קלט רק בעברית' : '';
  }

  getErrorPhone() {
    return this.signIn.get('phone')?.hasError('pattern') ? 'לא חוקי' :
      this.signIn.get('phone')?.hasError('maxlength') ? 'לא חוקי' : '';
  }

  confiremPassword() {
    return this.signIn.get('password') == this.signIn.get('confirmPassword');
  }

  getErrorEmail() {
    return this.signIn.get('email')?.hasError('required') ? 'שדה חובה' :
      this.signIn.get('email')?.hasError('pattern') ? 'כתובת לא חוקית' : '';
  }


  getErrorconfirmPassword() {
    return this.signIn.get('confirmPassword')?.hasError('required') ? 'שדה חובה' :
      this.signIn.get('confirmPassword')?.hasError('matching') ? 'סיסמא לא תואמת' :
        this.signIn.get('confirmPassword')?.hasError('minlength') ? 'חייב להכיל לפחות שמונה תווים' : '';

  }
  getErrorPassword() {
    return this.signIn.get('password')?.hasError('required') ? 'שדה חובה' :
      this.signIn.get('password')?.hasError('minlength') ? 'חייב להכיל שמונה תווים לפחות' : '';
  }


  ngOnInit(): void {

  }



  signInSubmit() {
    this.message = "";
    if (this.signIn.valid) {
      let cust = new CustomersDto();
      const { email } = this.signIn.value;
      const { name } = this.signIn.value;
      const { password } = this.signIn.value;
      const { phone } = this.signIn.value;

      var newEmail = email;
      newEmail = newEmail.replace(/\./gi, "{}");
      newEmail = newEmail.replace(/\@/gi, "[]");


      this.servCust.GetCustomerByMail(newEmail).subscribe(res => {
        cust = res
        if (cust == null) {
          this.signInCust.password = password;
          this.signInCust.mail = email;
          this.signInCust.name = name;
          this.signInCust.phone = phone;
          this.signInCust.src_profile = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/4QAuRXhpZgAATU0AKgAAAAgAAkAAAAMAAAABAAAAAEABAAEAAAABAAAAAAAAAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAGIAdoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1V3bJ5pN7etDfeNNoAdvb1o3t602igB29vWje3rTaKAHb29aN7etNooAdvb1o3t602igB29vWje3rTaKAHb29aN7etNooAdvb1o3t602igB29vWje3rTaKAHb29aN7etNooAdvb1o3t602igB29vWje3rTaKAHb29aN7etNooAdvb1o3t602igB29vWje3rTaKAHb29aN7etNooAdvb1o3t602igB29vWje3rTaKAHb29aN7etNooAdvb1o3t602igB29vWje3rTaKAHb29aN7etNooAdvb1o3t602igB29vWje3rTaKAHb29aN7etNooAdvb1o3t602igB29vWje3rTaKAHb29aN7etNooAdvb1o3t602igB29vWpNzetQ1LQAxvvGm05vvGm0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABUtRVLQAxvvGm05vvGm0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUVMts7c9PrQBDRVtLRR94k1MIkHRR+NAGdg+h/KnYb+6fyrRwB2FFAGdg+h/Km1p4HoKaY1PVR+VAGdRV1rVD0yPpUL2rD7pBoAgopxDDggg+9NoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqWoqloAY33jTac33jTaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiil6nFACVNFbtJyeB71LDbYwz9ew9KsUAMjiWPoOfU0+iigAooooAKKKKACiiigAooooARkDjDAGqstqRkpyPSrdFAGb+H50lX5YVk56N61SdGQ4brQA2iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqWoqloAY33jTac33jTaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFxn61chhEYy33j+lMtof42HParNABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUyWJZBg9exp9FAGc6GMkGm1fmiEqf7Q6VRxjg9aAEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqWoqloAY33jTac33jTaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKlhi8x/Ydaiq/bpsjHqetAEnSiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACqt1F/GPxq1SMAykHoRQBm0U5wUcqe1NoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqWoqloAY33jTac33jTaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAkhTfIB26mr9VrRerfhVmgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAqXSYcN69ar1fuFzCfbmqFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFS1FUtADG+8abTm+8abQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAF62GIR71LTYhiNfpTqACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBGGQR6is31rTrPk4kb60AMooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACpaiqWgBjfeNNpzfeNNoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDRj/ANWv0p1MhOYV+lPoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACs+X/WP9a0Kzn5cn3oAbRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFS1FUtADG+8abTm+8abQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAF21OYQPSpqq2j8lfXmrVABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAjnCE+grNq9ctiEj14qjQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABUtRVLQAxvvGm05vvGm0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQA+J9kgPvzWhWZV62k3xgdxwaAJaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKSRgiFj2oAq3T5cKO3Wq9OJJJJ6mm0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVLUVS0AMb7xptOb7xptABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFSRSGNwe3Q1HRQBpg5APrRVS2mx8jdD0NW6ACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKp3Mu87B0HWpp5vLGB941SoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKlqKpaAGN9402nN9402gAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAq1b3GcK3XsfWqtFAGnRVSG5xhX6djVsEEZBzQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVHNMI1/2j0FMmuQmQvLfyqoSXJJ5JoAUkuST1NNoooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKlqKpaAGN9402nN9402gAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKkjlaPocj0NR0UAXY7lX46H0NTVmVIkzp0P4GgC/RVVbz+8v5VKLmM98fWgCWimiVD0YUu5f7w/OgBaKb5ij+IfnTTPGP4hQBJRVdrtR91Sahe4d++B7UAW3mSPqfwFVZLlnyBwtQ0UAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVLUVS0AMb7xptOb7xptABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUvJ6UAJUkcTSdBx6mpYrbu/5VaAA6dKAK4tVx8xJP8qhlhaM+o9avUYz1oAzKKty2oPKcH0qu0bJ1B+tADKKKKACiiigAooooAKKKKACiiigAoopwDOcAE/SgBtPWNpDhR+NTR2p6ufwFWQoUYAwPagCAWo2cn5vWoZIGj5xkeoq9RQBmUVcltg+SvB9PWqpBQ4YYNADaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqWoqloAY33jTac33jTaACiiigAooooAKKKKACiiigAooooAKKKKACiinBC5AHU0AABcgAZJq3DAI+Ty1OiiES+56mpKACiiigAooooAKCAeozRRQBE9sjdMg+1QNauOhB/SrlFAGeY2TqppladIUU9VH5UAZtFaBhjPVRSfZov7g/OgChRV/7PF/dFOESDoo/KgCgEY9AfwFPS2kPbA96vYooArpaKPvEmpwqrwABS0UAFFFFABRRRQAUyWJZRz17Gn0UAZ8kbRkg/n60ytGSMSDBqjJG0ZwfwPrQAyiiigAooooAKKKKACiiigAooooAKKKKACiiigAqWoqloAY33jTac33jTaACiiigAooooAKKKKACiiigAooooAKKKKAFAJIA6npV2GERjJ+8etMtosAO3U9ParFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAU2SMSKQfwNOooAznQoSp6im1euIvMXj7w6e9UuRkGgBKKKKACiiigAooooAKKKKACiiigAooooAKlqKpaAGN9402nN9402gAooooAKKKKACiiigAooooAKKKKACpreLzHyR8oqNAXIUd6vxoI0CigB1FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFVbmL+MfjVqggEYPQ0AZlFPljMbkdu1MoAKKKKACiiigAooooAKKKKACiiigAqWoqloAY33jTac33jTaACiiigAooooAKKKKACiiigAoop8amRwvqaAJ7WPC7z36VZoAAAA6CigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAinj8xCR1HSqNadUZ4/LkOOjcigCKiiigAooooAKKKKACiiigAooooAKlqKpaAGN9402nN9402gAooooAKKKKACiiigAooooAKtWkfBf16VXAyQPU1oIoVAPSgBaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqO4TfGfUdKkooAzKKkmTy5COx5FR0AFFFFABRRRQAUUUUAFFFFABUtRVLQAxvvGm05vvGm0AFFFFABRRRQAUUUUAFFFFAE9quZM9lFXKgtRiLPqanoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooArXa/KG9Kq1oyrvjYe1Z1ABRRRQAUUUUAFFFFABRRRQAVLUVS0AMb7xptOb7xptABRRRQAUUUUAFFFFABRRTkGXA9TQBfjG1APQU6gdqKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACs+QbJCPetCqVyMTH3GaAIaKKKACiiigAooooAKKKKACpaiqWgBjfeNNpzfeNNoAKKKKACiiigAooooAKcDgg+hzzTaKAJ/tb+i0fa39F/KoKKAJ/tb+i/lR9rf0X8qgooAn+1v6L+VH2t/RfyqCigCf7W/ov5Ufa39F/KoKKAJ/tb+i/lR9rf0X8qgooAn+1v6L+VH2p/QflUFFAE/2p/RaPtT+g/KoKKAJ/tb+i/lR9qf0WoKKAJ/tT+i0fa39F/KoKKAJ/tb+i/lR9qf0H5VBRQBP9qf0Wj7W/ov5VBRQBP9qf0Wj7U/otQUUAT/AGp/RaPtb+i/lUFFAE/2t/Rfyo+1P6LUFFAE/wBqf0H5Ufan9B+VQUUAT/a39F/Kj7U/oPyqCigCf7W/ov5Ufa39F/KoKKAJ/tb+i/lR9rf0X8qgooAn+1v6L+VH2t/RfyqCigCf7W/ov5VHJI0hycZxjimUUAFFFFABRRRQAUUUUAFFFFABUtRVLQAxvvGm05vvGm0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABUtRVLQA0g5pNjelFFABsb0o2N6UUUAGxvSjY3pRRQAbG9KNjelFFABsb0o2N6UUUAGxvSjY3pRRQAbG9KNjelFFABsb0o2N6UUUAGxvSjY3pRRQAbG9KNjelFFABsb0o2N6UUUAGxvSjY3pRRQAbG9KNjelFFABsb0o2N6UUUAGxvSjY3pRRQAbG9KNjelFFABsb0o2N6UUUAGxvSjY3pRRQAbG9KNjelFFABsb0o2N6UUUAGxvSjY3pRRQAbG9KNjelFFABsb0o2N6UUUAGxvSjY3pRRQAbG9KNjelFFABsb0o2N6UUUAGxvSjY3pRRQAbG9KNjelFFABsb0o2N6UUUAGxvSn4FFFAH//2Q=="
          this.servCust.AddCustomer(this.signInCust).subscribe(x => {
            if (x == -1) {
              this.snackBar.open('חלה שגיאה אנא נסה שנית', 'אישור', {
                duration: 2000,
              });
            }
            else {
              this.signInCust.id = x;
              if (this.signInCust.id == 1)
                localStorage.setItem('manager', JSON.stringify(this.signInCust));
              else
                localStorage.setItem('user', JSON.stringify(this.signInCust));
              this.r.navigate(['/'])
            }
          }

          );


          // })

        }
        else
          this.message = "מייל זה כבר רשום במערכת";


      });
    }
  }

}
