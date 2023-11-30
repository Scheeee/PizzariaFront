import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosDetailsComponent } from './produtos-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Produtos } from 'src/app/models/produtos';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';

describe('ProdutosDetailsComponent', () => {
  let component: ProdutosDetailsComponent;
  let fixture: ComponentFixture<ProdutosDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosDetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(ProdutosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    const produto = new Produtos();

    produto.id = 1;
    produto.detalhes = 'obs';
    produto.nome = 'coca';
    produto.valorUnit = 10;
  
    component.produto = produto;
    fixture.detectChanges(); 

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Teste de 1 @Input name ', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="name"]'));
    expect(elemento.nativeElement.ngModel).toEqual('coca');
  });

  it('Teste 2 de @Input name ', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="name"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });
  it('Teste de 1 @Input detalhes', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="detalhes"]'));
    expect(elemento.nativeElement.ngModel).toEqual('obs');
  });

  it('Teste 2 de @Input detalhes', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="detalhes"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });
  it('Teste de 1 @Input valorUnit', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="valorUnit"]'));
    expect(elemento.nativeElement.ngModel).toEqual(10);
  });

  it('Teste 2 de @Input valorUnit', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="valorUnit"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  
  it('teste editar() ', () => {
    spyOn(component['produtoService'], 'update').and.returnValue(of({}));
    component.editar();
    expect(component['produtoService'].update).toHaveBeenCalled();
  });
  it('teste erro ao salvar', () => {
    spyOn(window, 'alert'); 
    spyOn(component['produtoService'], 'save').and.returnValue(throwError('Erro ao salvar'));
    component.salvar();
    expect(window.alert).toHaveBeenCalledWith('erro na função salvar!');
  });
  
  it('teste erro ao editar', () => {
    spyOn(window, 'alert'); 
    spyOn(component['produtoService'], 'update').and.returnValue(throwError('Erro ao editar'));
    component.editar();
    expect(window.alert).toHaveBeenCalledWith('erro na função salvar!');
  });
  

  it('deve emitir evento após salvar', () => {
    const produto = new Produtos();

    produto.id = 1;
    produto.detalhes = 'obs';
    produto.nome = 'coca';
    produto.valorUnit = 10;
    spyOn(component.retorno, 'emit');
    spyOn(component['produtoService'], 'save').and.returnValue(of(produto));
    component.salvar();
    expect(component.retorno.emit).toHaveBeenCalledWith(produto);
  });
  
  it('deve emitir evento após editar', () => {
    const produto = new Produtos();

    produto.id = 1;
    produto.detalhes = 'obs';
    produto.nome = 'coca';
    produto.valorUnit = 10;
    spyOn(component.retorno, 'emit');
    spyOn(component['produtoService'], 'update').and.returnValue(of(produto));
    component.editar();
    expect(component.retorno.emit).toHaveBeenCalledWith(produto);
  });
  
});
