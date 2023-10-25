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
  listNome(nome: string): Observable<Clientes[]> {
    const list = `${this.API}/${nome}`;
    return this.http.get<Clientes[]>(list);
  }

  save(cliente: Clientes): Observable<any> {
    return this.http.post<any>(this.API, cliente);
  }
  
  update(id: Number, cliente: Clientes) : Observable<any>{
    const list = `${this.API}/${id}`;
    return this.http.put<any>(list, cliente);
  }
      
  delete(id: number): Observable<any> {

    const list = `${this.API}/${id}`;
    return this.http.delete<any>(list);
  }
}
