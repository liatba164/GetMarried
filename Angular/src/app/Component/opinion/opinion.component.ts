import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import CustomersDto from 'src/app/models/CustomersDto';
import hallsDto from 'src/app/models/hallsDto';
import OpinionDto from 'src/app/models/opinionDto';
import suppliersDto from 'src/app/models/suppliersDto';
import { ServCustomerService } from 'src/app/Servies/serv-customer.service';
import { ServOpinionService } from 'src/app/Servies/serv-opinion.service';
import { AddOpinionComponent } from '../add-opinion/add-opinion.component';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {
  //  name of the supplier/hall
  @Input() suppliers = new suppliersDto();
  @Input() hall = new hallsDto();
  name: string = ""

  custList: CustomersDto[] = []
  opinionList: OpinionDto[] = []

  ratingArr: number[] = [1, 2, 3, 4, 5];
  sum: number = 0;

  cust: any = localStorage.getItem('user');

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog, private serv: ServOpinionService, private servCust: ServCustomerService) {

  }


  ngOnInit(): void {


    this.servCust.GetCustomers().subscribe(x => {
      this.custList = x;
    })
    setTimeout(() => {
      if (this.hall.id != 0)
        this.serv.GetAllOpinionToHall(this.hall.id).subscribe(res =>
          this.opinionList = res);

      else
        this.serv.GetAllOpinionToSupp(this.suppliers.id).subscribe(res =>
          this.opinionList = res);


    }, 500);
  }
  getProfileImg(idcust: number) {
    let src_profile: string = "";
    this.custList.forEach((element) => {
      if (element.id == idcust)
        src_profile = this.custList[idcust - 1].src_profile;
    });
    if (src_profile == null)
      src_profile = "assets/Image/profile.jpg"

    return src_profile;
  }
  GetCustomerById(id: number) {
    let name: string = "";
    this.custList.forEach((element) => {
      if (element.id == id && name == "")
        name = this.custList[id - 1].name;
    });
    return name;
  }

  getName(): string {

    if (this.hall.id != 0)
      return this.name = this.hall.name;
    return this.name = this.suppliers.name;
  }

  showIcon(index: number, i: number) {
    if (index >= this.ratingArr[i]) {
      return 'star';
    } else {
      return 'star_border';
    }
  }


  openDialog() {
    const dialogConfig = new MatDialogConfig();
    if (this.cust != null) {
      if (this.hall.id != 0)
        dialogConfig.data = {
          hall: this.hall,
          num: 1
        }
      else {
        dialogConfig.data = {
          supp: this.suppliers,
          num: 2
        }
      }



      const dialogRef = this.dialog.open(AddOpinionComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        
        // window.location.reload();
      });
    }

    else
      if (localStorage.getItem('manager') != null)
        this.snackBar.open('מנהל אינו יכול להגיב', 'אישור')
      else
        this.snackBar.open('עליך להירשם לאתר בשביל להגיב', 'אישור')




  }





}

