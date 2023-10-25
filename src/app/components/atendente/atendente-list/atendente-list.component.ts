import { Component, EventEmitter, Inject, Input, Output, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Atendente } from 'src/app/models/atendente';
import { AtendenteService } from 'src/app/services/atendente-service';

@Component({
  selector: 'app-atendente-list',
  templateUrl: './atendente-list.component.html',
  styleUrls: ['./atendente-list.component.scss']
})
export class AtendenteListComponent {

  lista:Atendente[]=[];
  
  atendenteEdicao: Atendente = new Atendente();
  indiceEdicao!: number;
  nome: string = '';
  modalService = inject(NgbModal);
  atendenteService = inject(AtendenteService);

  @Input() modoAdd: boolean = false;
  @Output() retorno = new EventEmitter<Atendente>();

  constructor(){
    this.listAll();
  
  }

  listAll(){

    this.atendenteService.listAll().subscribe({
      next: lista =>{
        this.lista = lista;
      },
      error: erro => {
        alert("Algo deu errado!");
        console.error(erro);
      }
    })
  }
  listNome(){

    console.log(this.nome);
    this.atendenteService.listNome(this.nome).subscribe({
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
    this.atendenteEdicao = new Atendente();
    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, atendente: Atendente, indice: number) {
    this.atendenteEdicao = Object.assign({}, atendente); 
    this.indiceEdicao = indice;
    
    this.modalService.open(modal, { size: 'sm' });
  }

  deletar(id: number) {

    this.atendenteService.delete(id).subscribe({
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
  addList(atendente: Atendente) {

    this.listAll();
    this.modalService.dismissAll();

  }

  lancamento(atendente: Atendente){
    this.retorno.emit(atendente);
  }



}
