import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { Atendente } from '../models/atendente';
import {jwtDecode} from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = 'http://localhost:8080/login';
  http = inject(HttpClient);
  constructor() { }

  logar(login: Login): Observable<Atendente> {
    return this.http.post<Atendente>(this.API, login);
  }

  deslogar(): Observable<any> {
    return this.http.get<any>(this.API+'/deslogar');
  }

  addToken(token: string){
    localStorage.setItem('token', token);
  }

  removerToken(){
    localStorage.removeItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  hasPermission(role: string): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const userRoles: string[] = decodedToken.role;
      return userRoles.includes(role);
    }
    return false;
  }


}
