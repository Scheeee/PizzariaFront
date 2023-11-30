import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Clientes } from 'src/app/models/clientes';
import { Endereco } from 'src/app/models/endereco';
import { EnderecoService } from 'src/app/services/endereco-service';

@Component({
  selector: 'app-endereco-details',
  templateUrl: './endereco-details.component.html',
  styleUrls: ['./endereco-details.component.scss']
})
export class EnderecoDetailsComponent {

  @Input() endereco : Endereco = new Endereco();
  @Input() cliente: Clientes = new Clientes;
  @Input() modoEdit: boolean = false;
  @Output() retorno = new EventEmitter<Endereco>;

  enderecoService = inject(EnderecoService);
  
  constructor(){
  
  }

  salvar(){
    this.endereco.cliente = new Clientes();
    console.log(this.cliente.id);
    this.endereco.cliente = this.cliente;
    if(this.endereco.cliente == null){
      alert("cliente não pode ser nulo");
    }

    console.log(this.endereco);

    

    this.enderecoService.save(this.endereco).subscribe({
      next: endereco => { // QUANDO DÁ CERTO
        this.cliente.endereco = endereco;
        this.retorno.emit(endereco);
        alert('endereco ok!');
        
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('erro na função salvar!');
        console.error(erro);
      }
    });;

  }

  editar(){
    this.endereco.cliente = new Clientes();
    console.log(this.cliente.id);
    this.endereco.cliente = this.cliente;
    if(this.endereco.cliente == null){
      alert("cliente não pode ser nulo");
    }

    this.enderecoService.update(this.endereco.id, this.endereco).subscribe({
      next: endereco => { // QUANDO DÁ CERTO
        this.retorno.emit(endereco);
        alert('endereco ok!');
        
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('erro na função editar!');
        console.error(erro);
      }
    });;

  }

}

