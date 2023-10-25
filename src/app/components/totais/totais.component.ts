import { Component, Input, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Total } from 'src/app/models/total';
import { PedidosService } from 'src/app/services/pedidos-service';
import * as moment from 'moment';
@Component({
  selector: 'app-totais',
  templateUrl: './totais.component.html',
  styleUrls: ['./totais.component.scss']
})
export class TotaisComponent {

  dataAtual: string = '';
  conteudo: string = 'teste';

  total : Total = new Total;
  pedidosService = inject(PedidosService);

  dataSelecionada: string = '';

 

  constructor(){
    this.totais();
  }
 


  totais() {
    const formattedDate = moment().format('DD-MM-YYYY');
    console.log(formattedDate);
    this.pedidosService.totais(formattedDate).subscribe({
      next: total => {
        this.total = total;
        console.log(this.total);
      },
      error: erro => {
        alert("Algo deu errado!");
        console.error(erro);
      } 
    });

  }

  formatDate(){

    
    if (this.dataSelecionada) {
      const parts = this.dataSelecionada.split('-');
      const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
      this.dataSelecionada = formattedDate;
    
    console.log(formattedDate);
    this.pedidosService.totais(formattedDate).subscribe({
      next: total => {
        this.total = total;
        console.log(this.total);
      },
      error: erro => {
        alert("Algo deu errado!");
        console.error(erro);
      } 
    });
  }


  }
 

}
