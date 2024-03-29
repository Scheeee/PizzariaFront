import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/layout/index/index.component';
import { ClientesListComponent } from './components/clientes/clientes-list/clientes-list.component';
import { PedidosListComponent } from './components/pedidos/pedidos-list/pedidos-list.component';
import { TotaisComponent } from './components/totais/totais.component';
import { AtendenteListComponent } from './components/atendente/atendente-list/atendente-list.component';
import { EnderecoListComponent } from './components/endereco/endereco-list/endereco-list.component';
import { ProdutosListComponent } from './components/produtos/produtos-list/produtos-list.component';

import { PedidoDetailsComponent } from './components/pedidos/pedido-details/pedido-details.component';
import { SaborListComponent } from './components/sabores/sabor-list/sabor-list.component';
import { rotaguardGuard } from './guards/rotaguard.guard';
import { LoginComponent } from './components/sistema/login/login.component';

const routes: Routes = [
{path:"", redirectTo: "login", pathMatch: 'full'},
{path: "login", component: LoginComponent},
{path: "pizzaria", component: IndexComponent,canActivate:[rotaguardGuard], children:[
  {path:"clientes", component: ClientesListComponent},
  {path: "pedidos", component: PedidosListComponent},
  {path: "total", component: TotaisComponent},
  {path: "atendente", component: AtendenteListComponent},
  {path: "endereco", component: EnderecoListComponent}, 
  {path: "produto", component: ProdutosListComponent},
  {path: "arrumarPedido", component: PedidoDetailsComponent},
  {path: "sabor", component: SaborListComponent}
  
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
