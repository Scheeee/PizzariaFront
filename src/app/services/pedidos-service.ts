import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedidos } from '../models/pedidos';
import { TotaisComponent } from '../components/totais/totais.component';
import { Total } from '../models/total';
import { Atendente } from '../models/atendente';
import { Clientes } from '../models/clientes';


@Injectable({
    providedIn: 'root'
  })
export class PedidosService { 

    API: string = 'http://localhost:8080/pizzaria/pedido';
    http = inject(HttpClient);


    constructor(){}

      listAll(): Observable<Pedidos[]> {
      const list = `${this.API}/lista`;
        return this.http.get<Pedidos[]>(list);
      }
      listAtivos(): Observable<Pedidos[]> {
        const list = `${this.API}/ativos`;
          return this.http.get<Pedidos[]>(list);
      }
      listFinalizados(): Observable<Pedidos[]> {
        const list = `${this.API}/finalizados`;
          return this.http.get<Pedidos[]>(list);
      }
      listCancelados(): Observable<Pedidos[]> {
        const list = `${this.API}/cancelados`;
          return this.http.get<Pedidos[]>(list);
      }
      comanda(idPedido: number, idAtendente: number): Observable<any>{
        const list = `${this.API}/comanda/${idPedido}/${idAtendente}`;
          return this.http.get<any>(list);
      }
      getCliente(idCliente: number): Observable<Clientes>{
        const list = `${this.API}/cliente/${idCliente}`;
          return this.http.get<Clientes>(list);
      }
    
      save(pedidos: Pedidos): Observable<any> {
        return this.http.post<any>(this.API, pedidos);
      }
      totais(data: string): Observable<Total> {
        const rota = `${this.API}/data/${data}`;
        return this.http.get<Total>(rota);
      }
      update(pedidos: Pedidos, id: Number) : Observable<any>{
        const list = `${this.API}/${id}`;
        return this.http.put<any>(list, pedidos);
      }
      
      cancelar(pedidos: Pedidos, id: Number) : Observable<any>{
        const list = `${this.API}/${id}/cancelar`;
        return this.http.put<any>(list, pedidos);
      }
      finalizar(pedidos: Pedidos, id: Number) : Observable<any>{
        const list = `${this.API}/${id}/encerrar`;
        return this.http.put<any>(list, pedidos);
      }
            
      delete(id: number): Observable<any> {

        const list = `${this.API}/${id}`;
        return this.http.delete<any>(list);
      }
    

}
