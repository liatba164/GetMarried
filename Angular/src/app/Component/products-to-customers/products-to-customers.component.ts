import { Component, OnInit } from '@angular/core';
import ProductsToCustomersDto from 'src/app/models/productsToCustomersDto';
import { ServProdToCustomersService } from 'src/app/Servies/serv-prod-to-customers.service';
import { ServHallsService } from 'src/app/Servies/serv-halls.service';
import HallsDto from 'src/app/models/hallsDto';
import SuppliersDto from 'src/app/models/suppliersDto';
import { ServSuppliersService } from 'src/app/Servies/serv-suppliers.service';
import AddressDto from 'src/app/models/AddressDto';
import { ServAddressService } from 'src/app/Servies/serv-address.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteitemComponent } from '../deleteitem/deleteitem.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-products-to-customers',
  templateUrl: './products-to-customers.component.html',
  styleUrls: ['./products-to-customers.component.css']
})
export class ProductsToCustomersComponent implements OnInit {
  productsToCustomerList: ProductsToCustomersDto[] = []
  panelOpenState = false;
  cust: any = localStorage.getItem('user');

  AddressList: AddressDto[] = []

  HallsList: HallsDto[] = [];
  hall = new HallsDto();
  SuppliersList: SuppliersDto[] = [];
  supplier = new SuppliersDto();


  constructor(private snackbr: MatSnackBar, private dialog: MatDialog, private srv_addres: ServAddressService, private serv: ServProdToCustomersService, private srv_hall: ServHallsService, private srv_supp: ServSuppliersService) {

    this.srv_addres.GetAddress().subscribe(x => {
      this.AddressList = x;
    });

    this.serv.GetAllProductsToCustomers(JSON.parse(this.cust).id).subscribe(res => {
      this.productsToCustomerList = res;

      for (let index = 0; index < this.productsToCustomerList.length; index++) {
        if (this.productsToCustomerList[index].idHalls != null) {
          this.srv_hall.GetHallById(this.productsToCustomerList[index].idHalls).subscribe(x => {
            this.hall = x;
            this.HallsList.push(this.hall)
          });

        }

        if (this.productsToCustomerList[index].idSuppliers != null) {
          this.srv_supp.GetSuppliersById(this.productsToCustomerList[index].idSuppliers).subscribe(x => {
            this.supplier = x;
            this.SuppliersList.push(this.supplier)
          });

        }

      }
    });

  }

  getCity(id: number) {
    let addres = "";
    if (this.AddressList[id - 1].street != null)
      addres += this.AddressList[id - 1].street + " ";
    if (this.AddressList[id - 1].number != null)
      addres += this.AddressList[id - 1].number;
    addres += ", "
    if (this.AddressList[id - 1].city != null)
      addres += this.AddressList[id - 1].city;
    return addres
  }

  openDialog(id: number,idcategory:number) {
    
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(DeleteitemComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result == true)
        for (let index = 0; index < this.productsToCustomerList.length; index++) {
          if (this.productsToCustomerList[index].idHalls == id && idcategory==1) {
            this.serv.DeleteProducts(this.productsToCustomerList[index].id).subscribe(x => {
              if (x) window.location.reload();
              else this.snackbr.open('חלה שגיאה נסה שנית', 'אישור')
            });
            break;
          }
          if (this.productsToCustomerList[index].idSuppliers == id && idcategory==this.productsToCustomerList[index].idCategory) {
            this.serv.DeleteProducts(this.productsToCustomerList[index].id).subscribe(x => {
              if (x) window.location.reload();
              else this.snackbr.open('חלה שגיאה נסה שנית', 'אישור')
            });
            break;
          }
        }
    });

  }

  ngOnInit(): void {

  }
}
