import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
  
})
export class NavBarComponent implements OnInit {
  cust: any = localStorage.getItem('user');
  manager:any=localStorage.getItem('manager');
  //  toolTip="אזור אישי "+this.cust.name;
  constructor(public router: Router,   private route: ActivatedRoute) {
   

   }

  ngOnInit(): void {
  }
  
  onClkLink(navig:any){
    this.router.navigate([`/${navig}`], { relativeTo: this.route }).then(() => {
      window.location.reload();
    });
  }

  
}
