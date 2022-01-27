import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { PowerOffComponent } from '../power-off/power-off.component';

@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.css']
})
export class PersonalCenterComponent implements OnInit {
  opened = false;

  constructor(private dialog: MatDialog,public router: Router) { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(PowerOffComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result == true) {
        localStorage.removeItem('user');
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });;
      }
    });
  }

  ngOnInit(): void {
 
  }

}
