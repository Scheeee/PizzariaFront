import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from '../models/produtos';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  API: string = 'http://localhost:8080/pizzaria/produto';
  http = inject(HttpClient);


  constructor(){}

  listAll(): Observable<Produtos[]> {
    const list = `${this.API}/lista`;
    return this.http.get<Produtos[]>(list);
  }
    
  save(produtos: Produtos): Observable<Produtos> {
    return this.http.post<Produtos>(this.API, produtos);
  }
  update(produtos: Produtos, id: Number) : Observable<any>{
    const list = `${this.API}/${id}`;
    return this.http.put<any>(list, produtos);
  }
      
  delete(id: number): Observable<any> {

    const list = `${this.API}/${id}`;
    return this.http.delete<any>(list);
  }
}
