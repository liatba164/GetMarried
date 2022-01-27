import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { anyChanged } from '@progress/kendo-angular-common';
import HallsDto from 'src/app/models/hallsDto';
import SuppliersDto from 'src/app/models/suppliersDto';
import { ServHallsService } from 'src/app/Servies/serv-halls.service';
import { ServOpinionService } from 'src/app/Servies/serv-opinion.service';
import { ServSuppliersService } from 'src/app/Servies/serv-suppliers.service';
import { DeleteitemComponent } from '../deleteitem/deleteitem.component';
import { UpdateHallComponent } from '../update-hall/update-hall.component';
import { UpdateSupplierComponent } from '../update-supplier/update-supplier.component';

@Component({
  selector: 'app-delete-supplier',
  templateUrl: './delete-supplier.component.html',
  styleUrls: ['./delete-supplier.component.css']
})
export class DeleteSupplierComponent implements OnInit {
  show_hall: any;
  show_supplier: any;
  hallsList: HallsDto[] = [];
  supplierList: SuppliersDto[] = [];

  text: string = "";

  openDialog(id: number, category: number) {

    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(DeleteitemComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

      if (result == true) {
        if (category == 1) {
          this.srv_hall.DeleteHalls(id).subscribe(x => {
            if (x == false)
              this.snackBar.open('חלה שגיאה במחיקת האולם, נסה שנית', 'אישור')
            else
              window.location.reload()
          });
        }
        else
          this.srv_supp.DeleteSuppliers(id).subscribe(x => {
            if (x == false)
              this.snackBar.open('חלה שגיאה במחיקת הספק, נסה שנית', 'אישור')
            else
              window.location.reload();
          });
      }
    });
  }

  openUpdateDialog(id: number, category: number) {

    const dialogConfig = new MatDialogConfig();
    let dialogRef;
    dialogConfig.data = {
      id: id,
    }
    if (category == 1) {
      dialogRef = this.dialog.open(UpdateHallComponent, dialogConfig);
    }

    else {
      dialogRef = this.dialog.open(UpdateSupplierComponent, dialogConfig);
    }


    dialogRef.afterClosed().subscribe(result => {
      debugger
      console.log(`Dialog result: ${result}`);
      if (result!=undefined && result != "" && result != null) {
        if (result.data == true) {
          this.snackBar.open('הפרטים עודכנו בהצלחה', 'אישור');
          setTimeout(() => {
            window.location.reload();
          }, 2500);
        }
        else
          this.snackBar.open(' חלה שגיאה אנא נסה שוב', 'אישור');
      }
    });
  }



  search() {
    if (this.text == "") {
      this.show_hall = this.hallsList;
      this.show_supplier = this.supplierList;
    }
    else {
      this.show_hall = this.hallsList.filter(x => x.name.toUpperCase().startsWith(this.text.toUpperCase()))
      this.show_supplier = this.supplierList.filter(x => x.name.toUpperCase().startsWith(this.text.toUpperCase()));
    }
  }

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog, private srv_supp: ServSuppliersService, private srv_hall: ServHallsService) { }

  ngOnInit(): void {

    this.srv_hall.GetHalls().subscribe(x => {
      this.hallsList = x;
      this.srv_supp.GetAllSuppliers().subscribe(x => {
        this.supplierList = x;
        this.show_hall = this.hallsList;
        this.show_supplier = this.supplierList;
      });
    });
  }

}
