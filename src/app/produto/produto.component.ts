import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SideComponent } from "../side/side.component";
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../entities/produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule, SideComponent],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent implements OnInit {

  router: Router;
  servProd: ProdutoService;
  produtos: Array<Produto> = []

  constructor(router: Router, servProd: ProdutoService){
    this.router = router;
    this.servProd = servProd;
  }

  inlcuir(): void {
    this.router.navigateByUrl("/novoprod")
  }

  excluir(codigo: string): void{
    this.servProd.remover(codigo);
    this.router.navigateByUrl("/produto");
  }

  ngOnInit(): void {
    this.produtos = this.servProd.obterTodos();
  }
}
