import { Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { NovProdComponent } from './nov-prod/nov-prod.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'novoprod', component: NovProdComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
