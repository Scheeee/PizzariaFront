import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from '../models/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService{

  API: string = 'http://localhost:8080/pizzaria/endereco';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Endereco[]> {
    const list = `${this.API}/lista`;
    return this.http.get<Endereco[]>(list);
  }

  save(endereco: Endereco): Observable<any> {
    return this.http.post<any>(this.API, endereco);
  }
  update(id: Number, endereco: Endereco) : Observable<any>{
    const list = `${this.API}/${id}`;
    return this.http.put<any>(list, endereco);
  }
  delete(id: number): Observable<any> {

    const list = `${this.API}/${id}`;
    return this.http.delete<any>(list);
  }

}