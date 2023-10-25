import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizzas } from '../models/pizzas';

@Injectable({
    providedIn: 'root'
  })
export class PizzasServices {

  API: string = 'http://localhost:8080/pizzaria/pizza';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Pizzas[]> {
    const list = `${this.API}/lista`;
    return this.http.get<Pizzas[]>(list);
  }

  save(pizzas: Pizzas): Observable<Pizzas> {
    return this.http.post<Pizzas>(this.API, pizzas);
  }

  update(pizzas: Pizzas, id: Number) : Observable<any>{
    const list = `${this.API}/${id}`;
    return this.http.put<any>(list, pizzas);
  }
  
  delete(id: number): Observable<any> {

    const list = `${this.API}/${id}`;
    return this.http.delete<any>(list);
  }
}
