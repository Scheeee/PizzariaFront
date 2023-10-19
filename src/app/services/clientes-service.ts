import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from '../models/clientes';

@Injectable({
    providedIn: 'root'
})
export class ClientesService {
    API: string = 'http://localhost:8080/pizzaria/cliente';
  http = inject(HttpClient);

  constructor(){}

  listAll(): Observable<Clientes[]> {
    const list = `${this.API}/lista`;
    return this.http.get<Clientes[]>(list);
  }

  save(cliente: Clientes): Observable<any> {
    return this.http.post<any>(this.API, cliente);
  }
  
  delete(id: number): Observable<any> {

    let params =new HttpParams()
    .set('id', id.toString());

    return this.http.delete<any>(this.API, {params: params});
  }
}
