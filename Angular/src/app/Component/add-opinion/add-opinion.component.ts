import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import HallsDto from 'src/app/models/hallsDto';
import OpinionDto from 'src/app/models/opinionDto';
import SuppliersDto from 'src/app/models/suppliersDto';
import { ServOpinionService } from 'src/app/Servies/serv-opinion.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OpinionComponent } from '../opinion/opinion.component';

@Component({
  selector: 'app-add-opinion',
  templateUrl: './add-opinion.component.html',
  styleUrls: ['./add-opinion.component.css']
})
export class AddOpinionComponent implements OnInit {

  date: any;
  rating: number = 0;
  ratingArr: number[] = [];
  starCount: number = 5;
  cust: any = localStorage.getItem('user');
  flag: any;

  opinion = new FormGroup({
    text: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
  },

  );


  getErrorText() {
    return this.opinion.get('text')?.hasError('required') ? 'שדה חובה' : ''
  }

  getErrorDate() {
    return this.opinion.get('date')?.hasError('required') ? 'שדה חובה' : ''
  }

  constructor(private serv: ServOpinionService, private dialogRef: MatDialogRef<OpinionComponent>, private snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  onClick(rating: number) {
    this.rating = rating;
  }


  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  AddOpinion() {
    if (this.opinion.valid) {

      let newOpinion = new OpinionDto();
      //if suppliers
      if (this.data.num == 2) {
        let sup = new SuppliersDto();
        sup = this.data.supp;
        newOpinion.idCategory = sup.idCategory;
        newOpinion.idSuppliers = sup.id;
      }
      //if hall
      else {
        let hal = new HallsDto();
        hal = this.data.hall;
        newOpinion.idCategory = 1;
        newOpinion.idHall = hal.id;
      }

      const { text } = this.opinion.value;
      const { date } = this.opinion.value;
      newOpinion.weddindDate = date;
      newOpinion.opinion1 = text
      newOpinion.rating = this.rating;

      newOpinion.idCustomer = JSON.parse(this.cust).id;
      this.serv.AddOpinion(newOpinion).subscribe(x => {
        debugger
        if (x) {
          this.dialogRef.close();
          this.snackBar.open('תגובתך התווספה בהצלחה', 'אישור')
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
        else {
          this.snackBar.open('חלה שגיאה אנא נסה שנית', 'אישור')
        }
      });
    }
  }
}
