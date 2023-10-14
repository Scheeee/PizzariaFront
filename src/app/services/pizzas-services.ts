import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizzas } from '../models/pizzas';

@Injectable({
    providedIn: 'root'
  })
export class PizzasServices {

    API: string = 'http://localhost:8081/api/pizza';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Pizzas[]> {
    return this.http.get<Pizzas[]>(this.API);
  }

  save(pizzas: Pizzas): Observable<Pizzas> {
    return this.http.post<Pizzas>(this.API, pizzas);
  }
  
  delete(id: number): Observable<any> {

    let params =new HttpParams()
    .set('id', id.toString());

    return this.http.delete<any>(this.API, {params: params});
  }
}
