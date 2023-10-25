import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Sabor } from 'src/app/models/sabor';
import { SaborService } from 'src/app/services/sabor-service';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.scss']
})
export class PizzaDetailsComponent {

  @Input() sabor : Sabor = new Sabor();
  @Output() retorno = new EventEmitter<Sabor>;

  saborService = inject(SaborService);
  constructor(){}

  salvar(){
    if(this.sabor.ingredientes == null){
      alert("insira ingredientes ao sabor!");
    }
    this.saborService.save(this.sabor).subscribe({
      next: sabor => { 
        this.retorno.emit(sabor);
      },
      error: erro => { 
        alert('erro na função salvar!');
        console.error(erro);
      }
    });
  }

}


