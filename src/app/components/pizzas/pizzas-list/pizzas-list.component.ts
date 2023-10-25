import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pizzas } from 'src/app/models/pizzas';
import { Sabor } from 'src/app/models/sabor';
import { PizzasServices } from 'src/app/services/pizzas-services';

@Component({
  selector: 'app-pizzas-list',
  templateUrl: './pizzas-list.component.html',
  styleUrls: ['./pizzas-list.component.scss']
})
export class PizzasListComponent {

  @Output() retorno = new EventEmitter<Pizzas>();
  @Input() modoLancamento: boolean = false;

  lista:Pizzas[]=[];
  
  pizzaEdicao: Pizzas = new Pizzas();
  indiceEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  pizzasService = inject(PizzasServices);

  

  constructor(){
    this.listAll();
  
  }

  listAll(){

    this.pizzasService.listAll().subscribe({
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
    this.pizzaEdicao = new Pizzas();

    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, pizza: Pizzas, indice: number) {
    this.pizzaEdicao = Object.assign({}, pizza); 
    this.indiceEdicao = indice;

    this.modalService.open(modal, { size: 'sm' });
  }

  deletar(id: number) {

    this.pizzasService.delete(id).subscribe({
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
  addList1(pizza:Pizzas) {

    this.listAll();
    this.modalService.dismissAll();

  }


  
  adicionarPizza(modal: any) {
    this.pizzaEdicao = new Pizzas();
    this.indiceEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  editarPizza(modal: any, pizzas: Pizzas, indice: number) {
    this.pizzaEdicao = Object.assign({}, pizzas); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
    this.indiceEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  addOuEditarPizza(pizzas: Pizzas) {

    this.listAll();

    this.modalService.dismissAll();
  }


  lancamento(pizza: Pizzas){
    this.retorno.emit(pizza);
  }

  
}


