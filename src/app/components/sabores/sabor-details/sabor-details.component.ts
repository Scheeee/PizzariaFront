import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Sabor } from 'src/app/models/sabor';
import { SaborService } from 'src/app/services/sabor-service';

@Component({
  selector: 'app-sabor-details',
  templateUrl: './sabor-details.component.html',
  styleUrls: ['./sabor-details.component.scss']
})
export class SaborDetailsComponent {

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
