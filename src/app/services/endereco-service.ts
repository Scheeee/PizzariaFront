import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from '../models/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService{

  API: string = 'http://localhost:8081/pizzaria/endereco';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.API);
  }

  save(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>(this.API, endereco);
  }
  
  delete(id: number): Observable<any> {

    let params =new HttpParams()
    .set('id', id.toString());

    return this.http.delete<any>(this.API, {params: params});
  }

}