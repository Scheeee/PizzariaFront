import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pedidos } from 'src/app/models/pedidos';
import { Pizzas } from 'src/app/models/pizzas';
import { Sabor } from 'src/app/models/sabor';
import { PedidosService } from 'src/app/services/pedidos-service';
import { PizzasServices } from 'src/app/services/pizzas-services';

@Component({
  selector: 'app-pizzas-details2',
  templateUrl: './pizzas-details2.component.html',
  styleUrls: ['./pizzas-details2.component.scss']
})
export class PizzasDetails2Component {

  @Input() pizza : Pizzas = new Pizzas();
  @Output() retorno = new EventEmitter<Pizzas>;
  @Input() modoLancamento: boolean = false;
  @Input() modoEdit: boolean = false;
  @Input() pedido: Pedidos = new Pedidos();
 

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  pedidosService = inject(PedidosService); 
  pizzaService = inject(PizzasServices);

  sabores: number = 1;

  constructor(){}

  retornoSaborList(sabor: Sabor) {

    if (this.pizza.sabores == null)
      this.pizza.sabores = [];
      
   
    this.pizza.sabores.push(sabor);
    this.modalRef.dismiss();
  }
  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }

  excluir(sabor: Sabor, indice: number) {

    this.pizza.sabores.splice(indice,1);
    
  }
  salvar(){
    this.pizzaService.save(this.pizza).subscribe({
      next: pizza => { 
        this.retorno.emit(pizza);
        //this.lancamento(pizza);
      },
      error: erro => { 
        alert('erro na função salvar!');
        console.error(erro);
      }
    });
  }

  lancamento(){

    if(this.pizza.sabores.length > this.sabores){
      alert("A pizza" +this.pizza.tamanho + "pode conter apenas" +this.sabores+ "sabor!");
    }
    else if(this.pizza.sabores.length > 0){
      if(this.pizza.tamanho == null){
      this.pizza.tamanho = "P";
      this.pizza.valorUnit = 20;
      }
    
      this.retorno.emit(this.pizza);
    }
    else{
      alert("Escolha o tamanho e o sabor da pizza!");
    }
  }

  onChange(event: any) {
    const selectedValue = event.target.value;
  
    switch (selectedValue) {
      case 'P':
        this.pizza.tamanho = "P";
        this.pizza.valorUnit = 20;

        if(this.pizza.sabores.length > 1){
          alert("A pizza P pode conter apenas 1 sabor!");
        }
        this.sabores = 1;
        break;
      case 'M':
        this.pizza.tamanho = "M";
        this.pizza.valorUnit = 25;
        if(this.pizza.sabores.length > 2){
          alert("A pizza M pode conter apenas 2 sabores!");
        }
        this.sabores = 2;
        break;
      case 'G':
        this.pizza.tamanho = "G";
        this.pizza.valorUnit = 30;
        if(this.pizza.sabores.length > 3){
          alert("A pizza G pode conter apenas 3 sabores!");
        }
        this.sabores = 3;
        break;
      case 'GG':
        this.pizza.tamanho = "GG";
        if(this.pizza.sabores.length > 4){
          alert("A pizza GG pode conter apenas 4 sabores!");
        }
        this.pizza.valorUnit = 35;
        this.sabores = 4;
        break;
      
    }
  }

  

}
