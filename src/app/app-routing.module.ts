import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './layout/index/index.component';
import { ClientesListComponent } from './clientes/clientes-list/clientes-list.component';
import { PedidosListComponent } from './pedidos/pedidos-list/pedidos-list.component';
import { PizzasListComponent } from './pizzas/pizzas-list/pizzas-list.component';
import { TotaisComponent } from './totais/totais.component';

const routes: Routes = [
{path:"", redirectTo: "login", pathMatch: 'full'},
{path: "login", component: LoginComponent},
{path: "pizzaria", component: IndexComponent, children:[
  {path:"clientes", component: ClientesListComponent},
  {path: "pedidos", component: PedidosListComponent},
  {path: "pizzas", component: PizzasListComponent},
  {path: "totais", component: TotaisComponent}
  
]},
{
  path:"adm", component: IndexComponent, children:[
    {path:"clientes", component: ClientesListComponent},
    {path: "pedidos", component: PedidosListComponent},
    {path: "pizzas", component: PizzasListComponent},
    {path: "totais", component: TotaisComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
