import { Component } from '@angular/core';
import { PedidosService } from '../services/pedidos-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-totais',
  templateUrl: './totais.component.html',
  styleUrls: ['./totais.component.scss']
})
export class TotaisComponent {
  total: String = '';
  dataAtual: string = '';

  constructor(private datePipe: DatePipe, private pedidosService: PedidosService) {
    this.dataAtual = this.datePipe.transform(new Date(), 'dd-MM-yyyy' )|| '';
    this.totais();
  }

  totais() {
    this.pedidosService.totais(this.dataAtual).subscribe({
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
