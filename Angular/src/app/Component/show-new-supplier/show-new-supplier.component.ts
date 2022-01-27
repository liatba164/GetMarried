import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import ContactUsDto from 'src/app/models/ContactUsDto';
import { ContactUsService } from 'src/app/Servies/contact-us.service'
import { DeleteitemComponent } from '../deleteitem/deleteitem.component';

@Component({
  selector: 'app-show-new-supplier',
  templateUrl: './show-new-supplier.component.html',
  styleUrls: ['./show-new-supplier.component.css']
})
export class ShowNewSupplierComponent implements OnInit {
  contactUsList: ContactUsDto[] = [];
  displayedColumns: string[] = ['name', 'phone', 'email', 'message','delete'];
  dataSource = [...this.contactUsList];
  // @ViewChild(MatTable) table!: MatTable<ContactUsDto>;

  removeData(row: any) {
    console.log(row);
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(DeleteitemComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result == true)
        this.serv.DeleteContactUs(row.id).subscribe(() => window.location.reload());


    });
 
  }


  constructor(private serv: ContactUsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.serv.GetAllContact().subscribe(x => { this.contactUsList = x; console.log(this.contactUsList)})


  }

}
