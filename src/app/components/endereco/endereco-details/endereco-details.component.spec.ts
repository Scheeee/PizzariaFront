import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoDetailsComponent } from './endereco-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Clientes } from 'src/app/models/clientes';
import { Endereco } from 'src/app/models/endereco';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('EnderecoDetailsComponent', () => {
  let component: EnderecoDetailsComponent;
  let fixture: ComponentFixture<EnderecoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecoDetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(EnderecoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    const cliente = new Clientes();
    const endereco = new Endereco();

    cliente.id = 1;
    cliente.nome = 'ana';
    cliente.telefone = '45-9999-4533';
    
    endereco.rua= 'rua';
    endereco.complemento = 'esquina';
    endereco.id = 1;
    endereco.numero = '123';
    endereco.cliente = cliente;

    component.endereco = endereco;
    component.cliente = cliente;
    fixture.detectChanges(); 

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Teste de 1 @Input ruae ', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="rua"]'));
    expect(elemento.nativeElement.ngModel).toEqual('rua');
  });

  it('Teste 2 de @Input rua ', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="rua"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });
  it('Teste de 1 @Input numero ', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="numero"]'));
    expect(elemento.nativeElement.ngModel).toEqual('123');
  });

  it('Teste 2 de @Input numero', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="numero"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });
  it('Teste de 1 @Input complemento ', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="complemento"]'));
    expect(elemento.nativeElement.ngModel).toEqual('esquina');
  });

  it('Teste 2 de @Input complemento', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="complemento"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });
  
  
  it('teste salvar() ', () => {
    spyOn(component['enderecoService'], 'save').and.returnValue(of({}));
    component.salvar();
    expect(component['enderecoService'].save).toHaveBeenCalled();
  });
  it('teste editar() ', () => {
    spyOn(component['enderecoService'], 'update').and.returnValue(of({}));
    component.editar();
    expect(component['enderecoService'].update).toHaveBeenCalled();
  });
});
