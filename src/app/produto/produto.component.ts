import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SideComponent } from "../side/side.component";

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [SideComponent],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent implements OnInit {

  router: Router;

  constructor(router: Router){
    this.router = router;
  }

  inlcuir(): void {
    this.router.navigateByUrl("/novoprod")
  }

  excluir(codigo: string): void{ }

  ngOnInit(): void { }
}
