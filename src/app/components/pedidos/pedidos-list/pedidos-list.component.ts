import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Clientes } from 'src/app/models/clientes';
import { Pedidos } from 'src/app/models/pedidos';
import { PedidosService } from 'src/app/services/pedidos-service';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.scss']
})
export class PedidosListComponent {
  lista:Pedidos[]=[];
  
  pedidoEdicao: Pedidos = new Pedidos();
  indiceEdicao!: number;

  modalService = inject(NgbModal);
  pedidosService = inject(PedidosService);
  modalRef!: NgbModalRef;


  

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
  ativos(){

    this.pedidosService.listAtivos().subscribe({
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
  finalizados(){

    this.pedidosService.listFinalizados().subscribe({
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
  cancelados(){

    this.pedidosService.listCancelados().subscribe({
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

  cancelar(pedido: Pedidos, id: number){
    this.pedidosService.cancelar(pedido, id).subscribe({
      next: lista => { // QUANDO DÁ CERTO
        alert('pedido cancelado!');
        this.listAll();
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Observe o erro no console!');
        console.error(erro);
      }
    });
  }
  finalizar(pedido: Pedidos, id: number){
    this.pedidosService.finalizar(pedido, id).subscribe({
      next: lista => { // QUANDO DÁ CERTO
        alert('pedido finalizado!');
        this.listAll();
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Observe o erro no console!');
        console.error(erro);
      }
    });
  }


  adicionar(modal: any) {
    this.pedidoEdicao = new Pedidos();
    this.indiceEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }

  editar(modal: any, pedido: Pedidos, indice: number) {
    this.pedidoEdicao = Object.assign({}, pedido); 
    this.indiceEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }
  addEndereco(cliente: Clientes, modal: any){
    this.modalRef = this.modalService.open(modal, { size: 'md' })
  }
 

  addOuEditarPedido(pedido: Pedidos) {

    this.listAll();

    this.modalService.dismissAll();

  }

  deletar(id: number) {

    this.pedidosService.delete(id).subscribe({
      next: lista => { // QUANDO DÁ CERTO
        alert('deletado com sucesso!');
        this.listAll();
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Observe o erro no console!');
        console.error(erro);
      }
    });

  }
  
  comanda(idPedido: number, idAtendente: number){
      this.pedidosService.comanda(idPedido, idAtendente).subscribe({
      next: lista => { // QUANDO DÁ CERTO
        alert('comanda gerada com sucesso!');
        this.listAll();
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Observe o erro no console!');
        console.error(erro);
      }
    });
  }


  onChange(event: any) {
    const selectedValue = event.target.value;
  
    switch (selectedValue) {
      case '1':
        this.ativos();
        break;
      case '2':
        this.listAll();
        break;
      case '3':
        this.finalizados();
        break;
      case '4':
        this.cancelados();
        break;
      default:
        this.listAll();
        break;
    }
  }
  

 

 
}
