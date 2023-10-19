import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Clientes } from 'src/app/models/clientes';
import { ClientesService } from 'src/app/services/clientes-service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesListComponent {

  lista:Clientes[]=[];
  
  clienteEdicao: Clientes = new Clientes();
  indiceEdicao!: number;

  modalService = inject(NgbModal);
  clientesService = inject(ClientesService);

  

  constructor(){
    this.listAll();
  
  }

  listAll(){

    this.clientesService.listAll().subscribe({
      next: lista =>{
        this.lista = lista;
      },
      error: erro => {
        alert("Algo deu errado!");
        console.error(erro);
      }
    })
  }

  adicionar(modal: any) {
    this.clienteEdicao = new Clientes();

    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, cliente: Clientes, indice: number) {
    this.clienteEdicao = Object.assign({}, cliente); 
    this.indiceEdicao = indice;

    this.modalService.open(modal, { size: 'sm' });
  }

  deletar(id: number) {

    this.clientesService.delete(id).subscribe({
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
  addList(cliente: Clientes) {

    this.listAll();
    this.modalService.dismissAll();

  }
}
