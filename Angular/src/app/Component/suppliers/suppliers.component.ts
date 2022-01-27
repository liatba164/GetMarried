import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import AddressDto from 'src/app/models/AddressDto';
import CategoryDto from 'src/app/models/CategoryDto';
import ProductsToCustomersDto from 'src/app/models/productsToCustomersDto';
import SuppliersDto from 'src/app/models/suppliersDto';
import { ServAddressService } from 'src/app/Servies/serv-address.service';
import { ServCategoryService } from 'src/app/Servies/serv-category.service';
import { ServProdToCustomersService } from 'src/app/Servies/serv-prod-to-customers.service';
import { ServSuppliersService } from 'src/app/Servies/serv-suppliers.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  @Input() selected: boolean[] = [];
  @Output() selectedChange = new EventEmitter<boolean>();
  prod = new ProductsToCustomersDto();
  cust: any = localStorage.getItem('user');
  prodList: ProductsToCustomersDto[] = [];

  filter = false;
  id: number = 0;
  suppliersList: SuppliersDto[] = []
  supplier = new SuppliersDto();
  addressList: AddressDto[] = [];
  category = new CategoryDto();

  constructor(private snackBar: MatSnackBar, private serv_prodToCust: ServProdToCustomersService, private addressServ: ServAddressService, private serv: ServSuppliersService, private aRoute: ActivatedRoute, private catServ: ServCategoryService, private rout: Router) {
    this.id = this.aRoute.snapshot.params["num"];
  }

  ShowSuppliersList(newItem: SuppliersDto[]): any {
    this.suppliersList = newItem;
    if (this.suppliersList.length == 0)
      this.filter = true;
    else this.filter = false;
  }

  getCategory() {
    let cate = this.id;
    const category: { [key: number]: string } = {
      2: "שמלות כלה",
      3: "איפור כלות",
      4: "עיצוב שיער",
      5: "חליפות חתן",
      6: "צילום אירועים",
      7: "די-גיי",
    }
    const name: string = category[cate] || "";
    return name;
  }

  GetAddressById(id: number): string {
    return this.addressList[id - 1]?.city;
  }

  GetSupplierById(num: number) {
    this.serv.GetSuppliersById(num).subscribe(x => {
      this.supplier = x;
      this.rout.navigate(["/Supplier-Details/" + this.supplier.id]);
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
    if (JSON.parse(this.cust) != null) {
      this.selected[itemId] = !this.selected[itemId];
      if (this.selected[itemId] == true) {
        this.serv_prodToCust.GetSupplierProductsToCustomersById(itemId, JSON.parse(this.cust).id).subscribe(x => {
          this.prod = x;
          if (this.prod == null) {
            this.prod = new ProductsToCustomersDto();
            this.prod.idSuppliers = itemId;
            this.prod.idCustomer = JSON.parse(this.cust).id;
            this.prod.idCategory = this.id;

            this.serv_prodToCust.AddProducts(this.prod).subscribe(x => {
              if (!x)
                this.snackBar.open('חלה שגיאה', 'אישור');
            });
          }
        })
      }

      else {
        this.serv_prodToCust.GetSupplierProductsToCustomersById(itemId, JSON.parse(this.cust).id).subscribe(x => {
          this.prod = x;
          debugger
          this.serv_prodToCust.DeleteProducts(this.prod.id).subscribe(res => {
            if (!res)
              this.snackBar.open('חלה שגיאה', 'אישור');
          });
        });
      }
      this.selectedChange.emit(this.selected[itemId]);
    }
    else
      if (localStorage.getItem('manager') == null)
        this.snackBar.open('עליך להתחבר למערכת', 'אישור')
      else
        this.snackBar.open('אין למנהל רשימת "מעודפים שלי"', 'אישור')
  }




  OnInit() {
    this.serv.GetSuppliers(this.aRoute.snapshot.params["num"]).subscribe(res => {
      if (res == null || res == []) {
        setTimeout(() => {
          this.OnInit();
        }, 100);
      }
      this.suppliersList = res;
      this.addressServ.GetAddress().subscribe(x => this.addressList = x);
      this.serv_prodToCust.GetAllProductsToCustomers(JSON.parse(this.cust).id).subscribe(x => {
        this.prodList = x;
        this.prodList.map(prod => this.selected[prod.idSuppliers] = !this.selected[prod.idSuppliers]);
      })
    });
  }



  ngOnInit(): void {
    this.OnInit();
  }
}