import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import AddressDto from 'src/app/models/AddressDto';
import AreaDto from 'src/app/models/AreaDto';
import ImgDto from 'src/app/models/imgDto';
import ProductsToCustomersDto from 'src/app/models/productsToCustomersDto';
import ServiceDto from 'src/app/models/serviesDto';
import ServToSuppDto from 'src/app/models/ServToSuppDto';
import SuppliersDto from 'src/app/models/suppliersDto';
import { ServAddressService } from 'src/app/Servies/serv-address.service';
import { ServAreaService } from 'src/app/Servies/serv-area.service';
import { ServImgService } from 'src/app/Servies/serv-img.service';
import { ServProdToCustomersService } from 'src/app/Servies/serv-prod-to-customers.service';
import { ServServToSuppService } from 'src/app/Servies/serv-serv-to-supp.service';
import { ServServiceService } from 'src/app/Servies/serv-service.service';
import { ServSuppliersService } from 'src/app/Servies/serv-suppliers.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {
  srv = new ServiceDto();
  srvList: ServiceDto[] = [];
  supp = new SuppliersDto();
  ServToSuppList: ServToSuppDto[] = [];
  address = new AddressDto();
  area = new AreaDto();
  img: ImgDto[] = [];
  id: number;


  selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();
  cust: any = localStorage.getItem('user');
  search = 0;

  prod = new ProductsToCustomersDto();
  prodList: ProductsToCustomersDto[] = [];

  constructor(private snackBar: MatSnackBar, private srv_service: ServServiceService, private srv_servToSupp: ServServToSuppService,
    private serv: ServSuppliersService, private imgServ: ServImgService, private servArea: ServAreaService,
    private aRoute: ActivatedRoute, private addressserv: ServAddressService, private serv_prodToCust: ServProdToCustomersService,) {
    this.id = aRoute.snapshot.params["id"];

    this.serv.GetSuppliersById(this.id).subscribe(x => {
      this.supp = x;
      console.log(this.supp);
      this.srv_servToSupp.GetAllServToSupp(this.supp.id).subscribe(s => {
        this.ServToSuppList = s;
        for (let index = 0; index < this.ServToSuppList.length; index++) {
          this.srv_service.GetServiceById(this.ServToSuppList[index].idServ).subscribe(x => {
            this.srv = x
            this.srvList.push(this.srv);
          });
        }
      })

      this.addressserv.GetAddressById(this.supp.idAddress).subscribe(y => {
        this.address = y;
        this.servArea.GetAreaById(this.supp.idArea).subscribe(z => { this.area = z });
      });


      this.imgServ.GetImgSuppliersById(this.supp.idCategory, this.supp.id).subscribe(x => { this.img = x });

    });


  }


  public toggleSelected(id: any) {
debugger
    this.selected = !this.selected;

    if (this.selected) {
      this.serv_prodToCust.GetSupplierProductsToCustomersById(id, JSON.parse(this.cust).id).subscribe(x => {
        this.prod = x;
        if (this.prod == null) {
          this.prod = new ProductsToCustomersDto();
          this.prod.idSuppliers = id;
          this.prod.idCustomer = JSON.parse(this.cust).id;
          this.prod.idCategory = this.supp.idCategory;
          this.serv_prodToCust.AddProducts(this.prod).subscribe(x => {
            if (!x)
              this.snackBar.open('חלה שגיאה', 'אישור');
          });
        }
      })
    }

    else {
      this.serv_prodToCust.GetSupplierProductsToCustomersById(id, JSON.parse(this.cust).id).subscribe(x => {
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
    if (localStorage.getItem('user') != null) {
      var history = localStorage.getItem("history");
      var currentHistory = [];
      if (history == null) {
        currentHistory.push(this.id);
      }
      else {
        currentHistory = JSON.parse(history || '');
        currentHistory.forEach((element: number) => {
          if (element == this.id) {
            flag = true

          }
        });
        if (flag == false)
          currentHistory.push(this.id);
      }

      localStorage.setItem("history", JSON.stringify(currentHistory));
    }
    this.serv_prodToCust.GetSupplierProductsToCustomersById(this.id, JSON.parse(this.cust).id).subscribe(x => {
      if (x != null)
        this.selected = true;
    })
  }
}


