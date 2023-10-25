import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosService } from 'src/app/services/produtos-service';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss']
})
export class ProdutosListComponent {

  @Output() retorno = new EventEmitter<Produtos>();
  @Input() modoLancamento: boolean = false;


  lista:Produtos[]=[];
  
  produtoEdicao: Produtos = new Produtos();
  indiceEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  produtoService = inject(ProdutosService);

  

  constructor(){
    this.listAll();
  
  }

  listAll(){

    this.produtoService.listAll().subscribe({
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
    this.produtoEdicao = new Produtos();

    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, produto: Produtos, indice: number) {
    this.produtoEdicao = Object.assign({}, produto); 
    this.indiceEdicao = indice;

    this.modalService.open(modal, { size: 'sm' });
  }

  deletar(id: number) {

    this.produtoService.delete(id).subscribe({
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
  
  addList(produto:Produtos) {

    this.listAll();
    this.modalService.dismissAll();

  }

  adicionarproduto(modal: any) {
    this.produtoEdicao = new Produtos();
    this.indiceEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  editarproduto(modal: any, produto: Produtos, indice: number) {
    this.produtoEdicao = Object.assign({}, produto); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
    this.indiceEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  addOuEditarproduto(produto: Produtos) {

    this.listAll();

    this.modalService.dismissAll();
  }


  lancamento(produto: Produtos){
    this.retorno.emit(produto);
  }

}
