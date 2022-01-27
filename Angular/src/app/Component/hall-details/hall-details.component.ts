import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import AddressDto from 'src/app/models/AddressDto';
import AreaDto from 'src/app/models/AreaDto';
import HallsDto from 'src/app/models/hallsDto';
import HallTypeDto from 'src/app/models/hallTypeDto';
import ImgDto from 'src/app/models/imgDto';
import KashrutDto from 'src/app/models/KashrutDto';
import ProductsToCustomersDto from 'src/app/models/productsToCustomersDto';
import { LoadingService } from 'src/app/Servies/loading.service';
import { ServAddressService } from 'src/app/Servies/serv-address.service';
import { ServAreaService } from 'src/app/Servies/serv-area.service';
import { ServHallsService } from 'src/app/Servies/serv-halls.service';
import { ServHallTypeService } from 'src/app/Servies/serv-hallType.service';
import { ServImgService } from 'src/app/Servies/serv-img.service';
import { ServKashrutService } from 'src/app/Servies/serv-kashrut.service';
import { ServProdToCustomersService } from 'src/app/Servies/serv-prod-to-customers.service';

@Component({
  selector: 'app-hall-details',
  templateUrl: './hall-details.component.html',
  styleUrls: ['./hall-details.component.css']
})
export class HallDetailsComponent implements OnInit {

  hall = new HallsDto();
  address = new AddressDto();
  hallType = new HallTypeDto();
  kashrut = new KashrutDto();
  area = new AreaDto();
  img: ImgDto[] = [];
  id: number;

  selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();
  cust: any = localStorage.getItem('user');
  search = 0;

  prod = new ProductsToCustomersDto();
  prodList: ProductsToCustomersDto[] = [];


  constructor(private servArea: ServAreaService, private serv: ServHallsService, private serv_prodToCust: ServProdToCustomersService,
    private imgServ: ServImgService, private aRoute: ActivatedRoute, private addressserv: ServAddressService,
    private hallTypeServ: ServHallTypeService, private kashrutServ: ServKashrutService, private snackBar: MatSnackBar) {

    this.id = aRoute.snapshot.params["id"];
    this.serv.GetHallById(this.id).subscribe(x => {
      this.hall = x;
      this.addressserv.GetAddressById(this.hall.idAddress).subscribe(y => {
        this.address = y;
      });
      this.hallTypeServ.GetHallTypeById(this.hall.idtype).subscribe(z => {
        this.hallType = z;
      });
      this.imgServ.GetImgById(1, this.hall.id).subscribe(x => {
        this.img = x
      });
      this.servArea.GetAreaById(this.hall.idArea).subscribe(x => {
        this.area = x;
      })
      this.kashrutServ.GetKashrutById(this.hall.idKashrut).subscribe(x => {
        this.kashrut = x;
      })
    });

  }


  public toggleSelected(id: any) {

    this.selected = !this.selected;

    if (this.selected) {
      this.serv_prodToCust.GetHallProductsToCustomersById(id, JSON.parse(this.cust).id).subscribe(x => {
        this.prod = x;
        if (this.prod == null) {
          this.prod = new ProductsToCustomersDto();
          this.prod.idHalls = id;
          this.prod.idCustomer = JSON.parse(this.cust).id;
          this.prod.idCategory = 1;
          this.serv_prodToCust.AddProducts(this.prod).subscribe(x => {
            if (!x)
              this.snackBar.open('חלה שגיאה', 'אישור');
          });
        }
      })
    }

    else {
      this.serv_prodToCust.GetHallProductsToCustomersById(id, JSON.parse(this.cust).id).subscribe(x => {
        this.prod = x;
        this.serv_prodToCust.DeleteProducts(this.prod.id).subscribe(res => {
          if (!res)
            this.snackBar.open('חלה שגיאה', 'אישור');
        });
      });
    }
    this.selectedChange.emit(this.selected);
  }

  ngOnInit(): void {
    var flag = false;
    var history = localStorage.getItem("hall-history");
    var currentHistory = [];
    if (history == null) {
      currentHistory.push(this.id);
    }
    else {
      currentHistory = JSON.parse(history || '');
      currentHistory.forEach((element: number) => {
        if (element == this.id)
          flag = true
      });
      if (flag == false)
        currentHistory.push(this.id);
    }
    localStorage.setItem("hall-history", JSON.stringify(currentHistory));




    this.serv_prodToCust.GetHallProductsToCustomersById(this.id, JSON.parse(this.cust).id).subscribe(x => {
      if (x != null)
        this.selected = true;
    })
  }

}
