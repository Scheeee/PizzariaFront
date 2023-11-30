import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosListComponent } from './produtos-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Produtos } from 'src/app/models/produtos';

describe('ProdutosListComponent', () => {
  let component: ProdutosListComponent;
  let fixture: ComponentFixture<ProdutosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosListComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(ProdutosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    const produto = new Produtos();
    let lista: Produtos[]=[];

    produto.id = 1;
    produto.detalhes = 'obs';
    produto.nome = 'coca';
    produto.valorUnit = 10;

    lista.push(produto);
  
    component.lista = lista;
    component.produtoEdicao = produto;
    fixture.detectChanges(); 

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renderização', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Listagem de produtos');
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
