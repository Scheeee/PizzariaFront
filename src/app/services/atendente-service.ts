import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Atendente } from '../models/atendente';


@Injectable({
    providedIn: 'root'
})
export class AtendenteService {

  API: string = 'http://localhost:8080/pizzaria/atendente';
  http = inject(HttpClient);


  listAll(): Observable<Atendente[]> {
    const list = `${this.API}/lista`;
    return this.http.get<Atendente[]>(list);
  }
  listNome(nome: string): Observable<Atendente[]> {
    const list = `${this.API}/${nome}`;
    return this.http.get<Atendente[]>(list);
  }
    
  save(atendente: Atendente): Observable<any> {
    return this.http.post<any>(this.API, atendente);
  }
  update(id: Number, atendente: Atendente) : Observable<any>{
    const list = `${this.API}/${id}`;
    return this.http.put<any>(list, atendente);
  }
      
  delete(id: number): Observable<any> {

    const list = `${this.API}/${id}`;
    return this.http.delete<any>(list);
  }
}

