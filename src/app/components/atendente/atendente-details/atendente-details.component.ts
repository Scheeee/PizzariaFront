import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Atendente } from 'src/app/models/atendente';
import { AtendenteService} from 'src/app/services/atendente-service';
@Component({
  selector: 'app-atendente-details',
  templateUrl: './atendente-details.component.html',
  styleUrls: ['./atendente-details.component.scss']
})
export class AtendenteDetailsComponent {

  @Input() atendente : Atendente = new Atendente();
  @Input() modoEdit: boolean = false;
  @Output() retorno = new EventEmitter<Atendente>;

  atendenteService = inject(AtendenteService);

  constructor(){}
 
  salvar(){
      this.atendenteService.save(this.atendente).subscribe({
        next: atendente => { 
          this.retorno.emit(atendente);
        },
        error: erro => { 
          alert('erro na função salvar!');
          console.error(erro);
        }
      });
  }
    
  editar(){
   
      this.atendenteService.update(this.atendente.id, this.atendente).subscribe({
        next: atendente => { 
          this.retorno.emit(atendente);
        },
        error: erro => { 
          alert('erro na função salvar!');
          console.error(erro);
        }
      });
        
  }
}
