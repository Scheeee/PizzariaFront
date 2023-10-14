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
}
