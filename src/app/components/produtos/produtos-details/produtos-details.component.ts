import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pedidos } from 'src/app/models/pedidos';
import { Produtos } from 'src/app/models/produtos';
import { PedidosService } from 'src/app/services/pedidos-service';
import { ProdutosService } from 'src/app/services/produtos-service';

@Component({
  selector: 'app-produtos-details',
  templateUrl: './produtos-details.component.html',
  styleUrls: ['./produtos-details.component.scss']
})
export class ProdutosDetailsComponent {

  @Input() produto : Produtos = new Produtos();
  @Input() modoEdit : boolean = false;
  @Output() retorno = new EventEmitter<Produtos>;

  @Input() pedido: Pedidos = new Pedidos();
 

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  pedidosService = inject(PedidosService); 
  produtoService = inject(ProdutosService);

  constructor(){}

  salvar(){
    this.produtoService.save(this.produto).subscribe({
      next: produto => { 
        this.retorno.emit(produto);
      },
      error: erro => { 
        alert('erro na função salvar!');
        console.error(erro);
      }
    });
  }
  editar(){
    this.produtoService.update(this.produto, this.produto.id).subscribe({
      next: produto => { 
        this.retorno.emit(produto);
      },
      error: erro => { 
        alert('erro na função salvar!');
        console.error(erro);
      }
    });
  }
}
