import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pedidos } from 'src/app/models/pedidos';
import { Pizzas } from 'src/app/models/pizzas';
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

  @Input() pedido: Pedidos = new Pedidos();
 

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  pedidosService = inject(PedidosService); 
  pizzaService = inject(PizzasServices);

  constructor(){}

  salvar(){
    this.pizzaService.update(this.pizza, this.pizza.id).subscribe({
      next: pizza => { 
        this.retorno.emit(pizza);
      },
      error: erro => { 
        alert('erro na função salvar!');
        console.error(erro);
      }
    });
  }


  

}
