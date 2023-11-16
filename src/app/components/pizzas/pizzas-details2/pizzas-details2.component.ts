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
    this.retorno.emit(this.pizza);
  }


  

}
