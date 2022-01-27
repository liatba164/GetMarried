import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import AddressDto from 'src/app/models/AddressDto';
import AreaDto from 'src/app/models/AreaDto';
import { ServAddressService } from 'src/app/Servies/serv-address.service';
import { ServAreaService } from 'src/app/Servies/serv-area.service';
import { ServHallsService } from 'src/app/Servies/serv-halls.service';
import HallsDto from '../../models/hallsDto';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { SelectionModel } from '@angular/cdk/collections';
import ProductsToCustomersDto from 'src/app/models/productsToCustomersDto';
import CustomersDto from 'src/app/models/CustomersDto';
import { ServProdToCustomersService } from 'src/app/Servies/serv-prod-to-customers.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { max } from 'rxjs/operators';

interface FilterNode {
  name: string;
  children?: FilterNode[];
}

const TREE_DATA: FilterNode[] = [
  {
    name: 'סוג אולם',
  },
  {
    name: 'אזור',

  },
  {
    name: 'כמות מוזמנים',

  },

  {
    name: 'כשרות',

  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-halls',
  templateUrl: './halls.component.html',
  styleUrls: ['./halls.component.css']
})
export class HallsComponent implements OnInit {

  @Input() selected: boolean[] = [];
  @Output() selectedChange = new EventEmitter<boolean>();

  hallsList: HallsDto[] = []
  hall = new HallsDto();
  addressList: AddressDto[] = [];
  area = new AreaDto();
  address = new AddressDto();
  cust: any = localStorage.getItem('user');
  isFavorite: boolean[] = [];
  search = 0;

  prod = new ProductsToCustomersDto();
  prodList: ProductsToCustomersDto[] = [];


  constructor(private snackBar: MatSnackBar, private serv_prodToCust: ServProdToCustomersService, private serv: ServHallsService,
    private rout: Router, private addressServ: ServAddressService, private areaServ: ServAreaService) {
  }

  ShowHallList(newItem: HallsDto[]) {
    this.search = 1;
    this.hallsList = newItem;
  }


  /*hall card functions*/
  GetAddressById(id: number): string {
    return this.addressList[id - 1]?.city;
  }


  GetHallById(num: number) {
    this.serv.GetHallById(num).subscribe(x => {
      this.hall = x;
      this.rout.navigate(["/Hall-Details/" + this.hall.id]);
    });
  }

  sliceDescription(description: string): string {
    let s = "";
    let i = description.indexOf(' ')
    for (let index = 0; i != description.length && index <= 22; index++)
      i = description.indexOf(' ', i + 1)

    for (let index = 0; index < i; index++)
      s += description[index];

    return s == "" ? s : s + "..."
  }




  public toggleSelected(itemId: any) {
    // if (JSON.parse(this.cust) != null) {

    this.selected[itemId] = !this.selected[itemId];

    if (this.selected[itemId] == true) {
      this.serv_prodToCust.GetHallProductsToCustomersById(itemId, JSON.parse(this.cust).id).subscribe(x => {
        this.prod = x;
        if (this.prod == null) {
          this.prod = new ProductsToCustomersDto();
          this.prod.idHalls = itemId;
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
      this.serv_prodToCust.GetHallProductsToCustomersById(itemId, JSON.parse(this.cust).id).subscribe(x => {
        this.prod = x;
        this.serv_prodToCust.DeleteProducts(this.prod.id).subscribe(res => {
          if (!res)
            this.snackBar.open('חלה שגיאה', 'אישור');
        });
      });
    }
    this.selectedChange.emit(this.selected[itemId]);
  }





  OnInit() {

    this.serv.GetHalls().subscribe(res => {
      if (res == null || res == []) {
        setTimeout(() => {
          this.OnInit();
        }, 100);

      }
      this.hallsList = res

      this.addressServ.GetAddress().subscribe(x => {
        this.addressList = x;
      });

      this.serv_prodToCust.GetAllProductsToCustomers(JSON.parse(this.cust).id).subscribe(x => {
        this.prodList = x;
        this.prodList.map(prod => this.selected[prod.idHalls] = !this.selected[prod.idHalls]);

      })
    });
  }

  ngOnInit(): void {
    this.OnInit();
  }
}
