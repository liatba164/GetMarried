import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { localeData } from '@progress/kendo-angular-intl';
import { ServHallsService } from 'src/app/Servies/serv-halls.service';
import { ServSuppliersService } from 'src/app/Servies/serv-suppliers.service';
import HallsDto from 'src/app/models/hallsDto';
import SuppliersDto from 'src/app/models/suppliersDto';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  //get the suppliers and the halls from the db
  HallList: HallsDto[] = [];
  SupplierList: SuppliersDto[] = []

  //here is the history of the hall/suppliers that the user see
  HallsHistory: HallsDto[] = [];
  SupplierHistory: SuppliersDto[] = []

  //get the user history from localStorage
  supp_history: any = localStorage.getItem('history');
  hall_history: any = localStorage.getItem('hall-history');

  //parse the id of the supplier/hall to number
  hall_id = JSON.parse(this.hall_history)
  supp_Id = JSON.parse(this.supp_history);

  hall = new HallsDto();
  supp = new SuppliersDto();

  constructor(private srv_hall: ServHallsService, private srv_supplier: ServSuppliersService, private route: Router) { }

  GetHallById(num: number) {
    this.srv_hall.GetHallById(num).subscribe(x => {
      this.hall = x;
      this.route.navigate(["/Hall-Details/" + this.hall.id]);
    });
  }


  GetSupplierById(num: number) {
    this.srv_supplier.GetSuppliersById(num).subscribe(x => {
      this.supp = x;
      this.route.navigate(["/Supplier-Details/" + this.supp.id]);
    });
  }

  ngOnInit(): void {
    this.srv_hall.GetHalls().subscribe(x => {
      this.HallList = x;
      this.srv_supplier.GetAllSuppliers().subscribe(x => {
        this.SupplierList = x;

        //suppliers history
        for (let index = 0; index < this.supp_Id.length; index++) {
          this.SupplierList.forEach(element => {
            if (element.id == parseInt(this.supp_Id[index])) {
              this.SupplierHistory.push(element)
            }
          });
        }
      });

      //hall history
      for (let index = 0; index < this.hall_id.length; index++) {
        this.HallList.forEach(element => {
          if (element.id == parseInt(this.hall_id[index])) {
            this.HallsHistory.push(element)
          }
        });
      }
    })
  }
}
