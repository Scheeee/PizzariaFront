import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/layout/index/index.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { PizzasListComponent } from './components/pizzas/pizzas-list/pizzas-list.component';
import { PedidosListComponent } from './components/pedidos/pedidos-list/pedidos-list.component';
import { ClientesListComponent } from './components/clientes/clientes-list/clientes-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { TotaisComponent } from './components/totais/totais.component';
import { ClientesDetailsComponent } from './components/clientes/clientes-details/clientes-details.component';
import { PizzaDetailsComponent } from './components/pizzas/pizza-details/pizza-details.component';
import { PizzasDetails2Component } from './components/pizzas/pizzas-details2/pizzas-details2.component';
import { PedidoDetailsComponent } from './components/pedidos/pedido-details/pedido-details.component';
import { AtendenteListComponent } from './components/atendente/atendente-list/atendente-list.component';
import { AtendenteDetailsComponent } from './components/atendente/atendente-details/atendente-details.component';
import { EnderecoDetailsComponent } from './components/endereco/endereco-details/endereco-details.component';
import { EnderecoListComponent } from './components/endereco/endereco-list/endereco-list.component';
import { ProdutosListComponent } from './components/produtos/produtos-list/produtos-list.component';
import { ProdutosDetailsComponent } from './components/produtos/produtos-details/produtos-details.component';
import { SaborListComponent } from './components/sabores/sabor-list/sabor-list.component';
import { SaborDetailsComponent } from './components/sabores/sabor-details/sabor-details.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PizzasListComponent,
    PedidosListComponent,
    ClientesListComponent,
    TotaisComponent,
    ClientesDetailsComponent,
    PizzaDetailsComponent,
    PizzasDetails2Component,
    PedidoDetailsComponent,
    AtendenteListComponent,
    AtendenteDetailsComponent,
    EnderecoDetailsComponent,
    EnderecoListComponent,
    ProdutosListComponent,
    ProdutosDetailsComponent,
    SaborListComponent,
    SaborDetailsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgbModule, FormsModule, 
    HttpClientModule, DatePipe
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
