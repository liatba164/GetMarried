import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-power-off',
  templateUrl: './power-off.component.html',
  styleUrls: ['./power-off.component.css']
})
export class PowerOffComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<PowerOffComponent>) { }
  onClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
