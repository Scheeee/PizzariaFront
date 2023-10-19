import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pedidos } from 'src/app/models/pedidos';
import { PedidosService } from 'src/app/services/pedidos-service';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.scss']
})
export class PedidosListComponent {
  lista:Pedidos[]=[];
  
  clienteEdicao: Pedidos = new Pedidos();
  indiceEdicao!: number;

  modalService = inject(NgbModal);
  pedidosService = inject(PedidosService);

  

  constructor(){
    this.listAll();
  
  }

  listAll(){

    this.pedidosService.listAll().subscribe({
      next: lista =>{
        this.lista = lista;
        console.log(this.lista);
      },
      error: erro => {
        alert("Algo deu errado!");
        console.error(erro);
      }
    })
  }
}
