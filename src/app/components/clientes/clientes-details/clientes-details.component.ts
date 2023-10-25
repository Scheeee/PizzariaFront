import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Clientes } from 'src/app/models/clientes';
import { ClientesService } from 'src/app/services/clientes-service';

@Component({
  selector: 'app-clientes-details',
  templateUrl: './clientes-details.component.html',
  styleUrls: ['./clientes-details.component.scss']
})
export class ClientesDetailsComponent {

  @Input() cliente : Clientes = new Clientes();
  @Input() modoEdit: boolean = false;
  @Output() retorno = new EventEmitter<Clientes>;

  clienteService = inject(ClientesService);
  constructor(){}

  salvar(){
    this.clienteService.save(this.cliente).subscribe({
      next: cliente => { 
        this.retorno.emit(cliente);
      },
      error: erro => { 
        alert('erro na função salvar!');
        console.error(erro);
      }
    });
  }
  editar(){
    this.clienteService.update(this.cliente.id, this.cliente).subscribe({
      next: cliente => { 
        this.retorno.emit(cliente);
      },
      error: erro => { 
        alert('erro na função salvar!');
        console.error(erro);
      }
    });
  }

}
