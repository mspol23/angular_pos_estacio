import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideComponent } from '../side/side.component';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../entities/produto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nov-prod',
  standalone: true,
  imports: [SideComponent, FormsModule],
  templateUrl: './nov-prod.component.html',
  styleUrl: './nov-prod.component.css',
})
export class NovProdComponent implements OnInit {
  router: Router;
  servProd: ProdutoService;
  codigo: string = '';
  nome: string = '';
  quantidade: string = '';
  produto: Produto = new Produto();

  constructor(router: Router, servProd: ProdutoService) {
    this.router = router;
    this.servProd = servProd;
  }

  incluir(): void {

    this.servProd.adicionar(this.produto);

    this.router.navigateByUrl('/novoprod');

    this.produto = new Produto();

  }

  ngOnInit(): void {}
}
