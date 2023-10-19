import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './layout/index/index.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { PizzasListComponent } from './pizzas/pizzas-list/pizzas-list.component';
import { PedidosListComponent } from './pedidos/pedidos-list/pedidos-list.component';
import { ClientesListComponent } from './clientes/clientes-list/clientes-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { TotaisComponent } from './totais/totais.component';
import { ClientesDetailsComponent } from './clientes/clientes-details/clientes-details.component';



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
