import cli from '@angular/cli';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Atendente } from 'src/app/models/atendente';
import { Clientes } from 'src/app/models/clientes';
import { Endereco } from 'src/app/models/endereco';
import { Pedidos } from 'src/app/models/pedidos';
import { Pizzas } from 'src/app/models/pizzas';
import { Produtos } from 'src/app/models/produtos';
import { ClientesService } from 'src/app/services/clientes-service';
import { PedidosService } from 'src/app/services/pedidos-service';

@Component({
  selector: 'app-pedido-details',
  templateUrl: './pedido-details.component.html',
  styleUrls: ['./pedido-details.component.scss']
})
export class PedidoDetailsComponent {

  @Input() pedido: Pedidos = new Pedidos();
  @Input() enderecoEdit: Endereco = new Endereco();
  @Input() modoEdit: boolean = false;
  @Output() retorno = new EventEmitter<Pedidos>();
  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  pedidosService = inject(PedidosService);
  clienteService = inject(ClientesService);

  

  constructor() {
    

  }

  salvar() {
    
    if(this.pedido.entrega && this.pedido.cliente.endereco == null){

      alert("o pedido deve conter um endereço para entrega!")
    }
    else if(this.pedido.cliente == null){

      alert("o pedido deve conter um cliente!")
    }
    else if(this.pedido.atendente == null){

      alert("o pedido deve conter um atendente!")
    }
    else if(this.pedido.produtos.length == 0 && this.pedido.pizzas.length == 0){

      alert("o pedido deve conter um produto ou pizza!")
    }
    else{
      this.pedidosService.save(this.pedido).subscribe({
        next: pedido => { // QUANDO DÁ CERTO
        this.retorno.emit(pedido);
        },
        error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
        }
      });
    }



  }
  editar(){
    this.pedidosService.update(this.pedido, this.pedido.id).subscribe({
      next: pedido => { // QUANDO DÁ CERTO
      this.retorno.emit(pedido);
      },
      error: erro => { // QUANDO DÁ ERRO
      alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
      console.error(erro);
      }
    });
  }
  

  excluir(pizza: Pizzas, indice: number) {

    this.pedido.valorTotal = this.pedido.valorTotal - pizza.valorUnit;
    console.log(this.pedido.valorTotal);
    this.pedido.pizzas.splice(indice,1);
    
  }

  excluirProduto(produto: Produtos, indice: number) {

    this.pedido.valorTotal = this.pedido.valorTotal - produto.valorUnit;
    console.log(this.pedido.valorTotal);
    this.pedido.produtos.splice(indice,1);
    
  }

 

  retornoPizzaList(pizza: Pizzas) {

    if(this.pedido.valorTotal == null){
      this.pedido.valorTotal = 0;

    }
    if (this.pedido.pizzas == null)
      this.pedido.pizzas = [];
      console.log(this.pedido.valorTotal);
      console.log(pizza.valorUnit);
    this.pedido.valorTotal = pizza.valorUnit + this.pedido.valorTotal;
    console.log(this.pedido.valorTotal);
    this.pedido.pizzas.push(pizza);
    this.modalRef.dismiss();
  }
  retornoProdutoList(produtos: Produtos) {

    if(this.pedido.valorTotal == null){
      this.pedido.valorTotal = 0;

    }
    if (this.pedido.produtos == null)
      this.pedido.produtos = [];
      console.log(this.pedido.valorTotal);
      console.log(produtos.valorUnit);
    this.pedido.valorTotal = produtos.valorUnit + this.pedido.valorTotal;
    console.log(this.pedido.valorTotal);
    this.pedido.produtos.push(produtos);
    this.modalRef.dismiss();
  }


  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }
  lancarEndereco(modal: any) {
    this.enderecoEdit = new Endereco; 
      
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }
  editarEndereco(modal: any, endereco: Endereco) {
    this.enderecoEdit = Object.assign({}, endereco); 
      
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }

  getCliente(id : number){
    this.pedidosService.getCliente(id).subscribe({
      next: cliente =>{
        this.pedido.cliente = cliente;
        console.log(this.pedido.cliente);
      },
      error: erro => {
        alert("Algo deu errado!");
        console.error(erro);
      }
    })
  }
  

  retornoClienteList(cliente:Clientes) {

    this.pedido.cliente = cliente;

    this.modalRef.dismiss();
  }
  retornoEndereco(endereco:Endereco) {

    this.pedido.cliente.endereco = endereco;
    this.modalRef.dismiss();
    this.getCliente(this.pedido.cliente.id);
    
  }
  
  retornoAtendenteList(atendente: Atendente) {

    this.pedido.atendente = atendente;

    this.modalRef.dismiss();
  }
  checkboxEntrega(){

      if(this.pedido.entrega){

        this.pedido.entrega = false;
      }
      else{
        this.pedido.entrega = true;
      }
  }

  checkboxDinheiro(){

    if(this.pedido.dinheiro){

      this.pedido.dinheiro = false;
    }
    else{
      this.pedido.dinheiro = true;
    }
}

 


}
