import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaborListComponent } from './sabor-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Sabor } from 'src/app/models/sabor';

describe('SaborListComponent', () => {
  let component: SaborListComponent;
  let fixture: ComponentFixture<SaborListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaborListComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(SaborListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
    const sabor = new Sabor();
    let lista : Sabor[] = [];
    sabor.id = 1;
    sabor.nome = 'calabresa';
    sabor.ingredientes = 'calabresa, queijo';
  

    lista.push(sabor);
  
    component.lista = lista;
    component.saborEdicao = sabor;
    fixture.detectChanges(); 

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renderização', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Listagem de Sabores');
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

  it('teste do botão deletar', () => {
    spyOn(component, 'deletar');
    const editButton = fixture.debugElement.nativeElement.querySelector('button[name="deletar"]'); 
    editButton.click();
    expect(component.deletar).toHaveBeenCalled();
  });
});
