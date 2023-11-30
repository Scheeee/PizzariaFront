import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesDetailsComponent } from './clientes-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Clientes } from 'src/app/models/clientes';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('ClientesDetailsComponent', () => {
  let component: ClientesDetailsComponent;
  let fixture: ComponentFixture<ClientesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesDetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(ClientesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    const cliente = new Clientes();
    cliente.id = 1;
    cliente.nome = 'ana';
    cliente.telefone = '45-9999-4533';
  
    component.cliente = cliente;
    fixture.detectChanges(); 

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Teste de 1 @Input name ', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="name"]'));
    expect(elemento.nativeElement.ngModel).toEqual('ana');
  });

  it('Teste 2 de @Input name ', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="name"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });
  it('Teste de 1 @Input senha ', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="telefone"]'));
    expect(elemento.nativeElement.ngModel).toEqual('45-9999-4533');
  });

  it('Teste 2 de @Input senha', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="telefone"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });
  
  it('teste salvar() ', () => {
    spyOn(component['clienteService'], 'save').and.returnValue(of({}));
    component.salvar();
    expect(component['clienteService'].save).toHaveBeenCalled();
  });
  it('teste editar() ', () => {
    spyOn(component['clienteService'], 'update').and.returnValue(of({}));
    component.editar();
    expect(component['clienteService'].update).toHaveBeenCalled();
  });


});
