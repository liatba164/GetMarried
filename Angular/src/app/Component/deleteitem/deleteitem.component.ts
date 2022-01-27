import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deleteitem',
  templateUrl: './deleteitem.component.html',
  styleUrls: ['./deleteitem.component.css']
})
export class DeleteitemComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DeleteitemComponent>) {}

  onClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }
 
}
