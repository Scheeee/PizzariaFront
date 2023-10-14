import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedidos } from '../models/pedidos';


@Injectable({
    providedIn: 'root'
  })
export class PedidosService { 

    API: string = 'http://localhost:8081/api/pedido';
    http = inject(HttpClient);


    constructor(){}

    listAll(): Observable<Pedidos[]> {
        return this.http.get<Pedidos[]>(this.API);
      }
    
      save(pedidos: Pedidos): Observable<Pedidos> {
        return this.http.post<Pedidos>(this.API, pedidos);
      }
      
      delete(id: number): Observable<any> {
    
        let params =new HttpParams()
        .set('id', id.toString());
    
        return this.http.delete<any>(this.API, {params: params});
      }

}
