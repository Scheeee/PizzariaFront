import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Sabor } from 'src/app/models/sabor';
import { SaborService } from 'src/app/services/sabor-service';

@Component({
  selector: 'app-sabor-details',
  templateUrl: './sabor-details.component.html',
  styleUrls: ['./sabor-details.component.scss']
})
export class SaborDetailsComponent {

  @Input() sabor : Sabor = new Sabor();
  @Input() modoEdit : boolean = false;
  @Output() retorno = new EventEmitter<Sabor>;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
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
  editar(){
    this.saborService.update(this.sabor, this.sabor.id).subscribe({
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
