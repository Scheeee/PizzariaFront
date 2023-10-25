import { Component, EventEmitter, Output, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Endereco } from 'src/app/models/endereco';
import { EnderecoService } from 'src/app/services/endereco-service';

@Component({
  selector: 'app-endereco-list',
  templateUrl: './endereco-list.component.html',
  styleUrls: ['./endereco-list.component.scss']
})
export class EnderecoListComponent {

  lista:Endereco[]=[];
  
  clienteEdicao: Endereco = new Endereco();
  indiceEdicao!: number;

  modalService = inject(NgbModal);
  enderecoService = inject(EnderecoService);
  
 
  @Output() retorno = new EventEmitter<Endereco>();

  constructor(){
    this.listAll();
  
  }

  listAll(){

    this.enderecoService.listAll().subscribe({
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
