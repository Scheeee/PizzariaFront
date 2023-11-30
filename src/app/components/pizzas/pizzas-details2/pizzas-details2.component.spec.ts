import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasDetails2Component } from './pizzas-details2.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { Pizzas } from 'src/app/models/pizzas';
import { Sabor } from 'src/app/models/sabor';

describe('PizzasDetails2Component', () => {
  let component: PizzasDetails2Component;
  let fixture: ComponentFixture<PizzasDetails2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzasDetails2Component],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(PizzasDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
    const pizza = new Pizzas();

    let sabor = new Sabor();

    const sabores : Sabor[] = [];

    sabor.id= 1;
    sabor.nome= 'calabresa';
    sabor.ingredientes= 'calabresa...';
    sabores.push(sabor);

    pizza.id = 1;
    pizza.tamanho = 'P';
    pizza.sabores = sabores;
    pizza.valorUnit = 10

    component.pizza = pizza;
    component.pizza.sabores = sabores;

    fixture.detectChanges(); 

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Teste de 1 @Input tamanho ', () => {
    let elemento = fixture.debugElement.query(By.css('select[name="tamanho"]'));
    expect(component.pizza.tamanho).toEqual('P');
  });

  it('Teste 2 de @Input tamanho ', () => {
    let elemento = fixture.debugElement.query(By.css('select[name="tamanho"]'));
    expect(component.pizza.tamanho).not.toBeNull;
  });

  it('Teste de tamanho da lista de sabores ', () => {
    expect(component.pizza.sabores.length).toEqual(1); 
  });
  it('Teste de elemento na tabela', () => {
    let elementoNaTabela = fixture.debugElement.query(By.css('tbody td')); 
    expect(elementoNaTabela).not.toBeNull();
  });

  it('teste erro ao salvar', () => {
    spyOn(window, 'alert'); 
    spyOn(component['pizzaService'], 'save').and.returnValue(throwError('Erro ao salvar'));
    component.salvar();
    expect(window.alert).toHaveBeenCalledWith('erro na função salvar!');
  });
 
  it('deve emitir evento após salvar', () => {
    const pizza = new Pizzas();

    let sabor = new Sabor();

    const sabores : Sabor[] = [];

    sabor.id= 1;
    sabor.nome= 'calabresa';
    sabor.ingredientes= 'calabresa...';
    sabores.push(sabor);

    pizza.id = 1;
    pizza.tamanho = 'P';
    pizza.sabores = sabores;
    pizza.valorUnit = 10
    spyOn(component.retorno, 'emit');
    spyOn(component['pizzaService'], 'save').and.returnValue(of(pizza));
    component.salvar();
    expect(component.retorno.emit).toHaveBeenCalledWith(pizza);
  });
  
  
  
 
});
