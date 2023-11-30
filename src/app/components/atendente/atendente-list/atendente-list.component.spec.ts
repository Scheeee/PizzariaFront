import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendenteListComponent } from './atendente-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Atendente } from 'src/app/models/atendente';

describe('AtendenteListComponent', () => {
  let component: AtendenteListComponent;
  let fixture: ComponentFixture<AtendenteListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtendenteListComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(AtendenteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    let atendente = new Atendente();
    let lista : Atendente[] = [];
    atendente.id = 1;
    atendente.username = 'admin';
    atendente.password = 'admin';
    atendente.role = 'ADMIN';

    lista.push(atendente);
  
    component.atendenteEdicao = atendente;
    component.lista = lista;
    fixture.detectChanges(); 

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renderização', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Listagem de Atendentes');
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
