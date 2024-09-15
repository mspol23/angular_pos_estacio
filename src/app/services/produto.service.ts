import { Injectable } from '@angular/core';
import { Produto } from '../entities/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtos: Array<Produto>;

  constructor() {
    this.produtos = new Array<Produto>();
  }

  private getPos(codigo: string): number {

    // FORMA INDICADA PELO PROFESSOR:
    // for(let i = 0; i<this.produtos.length; i++){
    //   if(codigo == this.produtos[i].codigo){
    //     return i;
    //   }
    // }
    // return -1;
    
    // FORMA CONCISA:
    return this.produtos.findIndex(produto => codigo == produto.codigo);
  }

  adicionar(produto: Produto): void{
    this.produtos.push(produto);
  }

  remover(codigo: string): void {
    let pos = this.getPos(codigo);
    if(pos > -1){
      this.produtos.splice(pos, 1);
    }
  }

  // FORMA CONVENCIONAL DE DECLARAR FUNÇÃO:
  // obterTodos():Array<Produto> { return this.produtos};

  // FORMA COM ARROW FUNCTION:
  obterTodos = (): Array<Produto> => this.produtos;

}
