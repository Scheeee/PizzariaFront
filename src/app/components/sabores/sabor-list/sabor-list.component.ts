import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Sabor } from 'src/app/models/sabor';
import { SaborService } from 'src/app/services/sabor-service';

@Component({
  selector: 'app-sabor-list',
  templateUrl: './sabor-list.component.html',
  styleUrls: ['./sabor-list.component.scss']
})
export class SaborListComponent {

  @Output() retorno = new EventEmitter<Sabor>();
  @Input() modoLancamento: boolean = false;

  lista:Sabor[]=[];
  
  saborEdicao: Sabor = new Sabor();
  indiceEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  saborService = inject(SaborService);

  

  constructor(){
    this.listAll();
  
  }

  listAll(){

    this.saborService.listAll().subscribe({
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
    this.saborEdicao = new Sabor();

    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, sabor: Sabor, indice: number) {
    this.saborEdicao = Object.assign({}, sabor); 
    this.indiceEdicao = indice;

    this.modalService.open(modal, { size: 'sm' });
  }

  deletar(id: number) {

    this.saborService.delete(id).subscribe({
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
  addList(sabor:Sabor) {

    this.listAll();
    this.modalService.dismissAll();

  }
  addList1(sabor:Sabor) {

    this.listAll();
    this.modalService.dismissAll();

  }


  
  adicionarSabor(modal: any) {
    this.saborEdicao = new Sabor();
    this.indiceEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  editarSabor(modal: any, sabor: Sabor, indice: number) {
    this.saborEdicao = Object.assign({}, sabor); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
    this.indiceEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  addOuEditarSabor(sabor: Sabor) {

    this.listAll();

    this.modalService.dismissAll();
  }


  lancamento(sabor: Sabor){
    this.retorno.emit(sabor);
  }


}
