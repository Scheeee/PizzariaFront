import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Atendente } from '../models/atendente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
 
  roteador = inject(Router);

  atendente: Atendente = new Atendente();

  logar(){
    if(this.atendente.nome == "admin" ){
        this.roteador.navigate(['/pizzaria'])
    }else{
      alert("Usuário ou senha incorretos!!");
    }
  }
    
}