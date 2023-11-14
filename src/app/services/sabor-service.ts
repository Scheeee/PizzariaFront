import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sabor } from '../models/sabor';

@Injectable({
  providedIn: 'root'
})
export class SaborService{

  API: string = 'http://localhost:8080/pizzaria/sabor';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Sabor[]> {
    const list = `${this.API}/lista`;
        return this.http.get<Sabor[]>(list);
    
  }

  save(sabor: Sabor): Observable<any> {
    return this.http.post<any>(this.API, sabor);
  }
  
  delete(id: number): Observable<any> {

    let params =new HttpParams()
    .set('id', id.toString());

    return this.http.delete<any>(this.API, {params: params});
  }

}