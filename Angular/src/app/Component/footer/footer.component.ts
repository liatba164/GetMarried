import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public router: Router,   private route: ActivatedRoute) { }
  onClkLink(navig:any){
    this.router.navigate([`/${navig}`], { relativeTo: this.route }).then(() => {
      window.location.reload();
    });
  }
  ngOnInit(): void {
  }

}
