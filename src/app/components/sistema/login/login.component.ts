import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Atendente } from 'src/app/models/atendente';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: Login = new Login();
  loginService = inject(LoginService);
  roteador = inject(Router);
  atendente = new Atendente();

  constructor() {
    this.loginService.removerToken();
  }

  logar() {

    this.loginService.logar(this.login).subscribe({
      next: atendente => { // QUANDO DÁ CERTO
        this.atendente = atendente;
        this.loginService.addToken(atendente.token);
        this.roteador.navigate(['pizzaria/pedidos']);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('login ou senha incorretos');
        console.error(erro);
      }
    });


  }


}
