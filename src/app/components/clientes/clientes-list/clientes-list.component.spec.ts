import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesListComponent } from './clientes-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Clientes } from 'src/app/models/clientes';

describe('ClientesListComponent', () => {
  let component: ClientesListComponent;
  let fixture: ComponentFixture<ClientesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesListComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(ClientesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    const cliente = new Clientes();
    let lista: Clientes[] = [];
    cliente.id = 1;
    cliente.nome = 'ana';
    cliente.telefone = '45-9999-4533';

    lista.push(cliente);
  
    component.clienteEdicao = cliente;
    component.lista = lista;
    fixture.detectChanges(); 

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renderização', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Listagem de Clientes');
  });

  it('teste de tabela', () => {
    const compiled = fixture.debugElement.nativeElement;
    const tableRows = compiled.querySelectorAll('table tbody tr');
    expect(tableRows.length).toEqual(component.lista.length);
  });

  it('teste do botão adicionar', () => {
    spyOn(component, 'adicionar');
    const addButton = fixture.debugElement.nativeElement.querySelector('button[name="adicionar"]');
    addButton.click();
    expect(component.adicionar).toHaveBeenCalled();
  });
  

  it('teste do botão editar', () => {
    spyOn(component, 'editar');
    const editButton = fixture.debugElement.nativeElement.querySelector('button[name="editar"]'); 
    editButton.click();
    expect(component.editar).toHaveBeenCalled();
  });
  xit('teste do botão lancamento', () => {
    spyOn(component, 'lancamento');
    const editButton = fixture.debugElement.nativeElement.querySelector('button[name="lancamento"]'); 
    editButton.click();
    expect(component.lancamento).toHaveBeenCalled();
  });

  it('teste do botão deletar', () => {
    spyOn(component, 'deletar');
    const editButton = fixture.debugElement.nativeElement.querySelector('button[name="deletar"]'); 
    editButton.click();
    expect(component.deletar).toHaveBeenCalled();
  });
});
