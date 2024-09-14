import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideComponent } from "../side/side.component";

@Component({
  selector: 'app-nov-prod',
  standalone: true,
  imports: [SideComponent],
  templateUrl: './nov-prod.component.html',
  styleUrl: './nov-prod.component.css'
})
export class NovProdComponent implements OnInit {

  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  incluir(): void {
    this.router.navigateByUrl("/novoprod")
  }

  ngOnInit(): void {
      
  }

}
