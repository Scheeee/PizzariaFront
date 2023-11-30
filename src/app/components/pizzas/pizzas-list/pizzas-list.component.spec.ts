import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasListComponent } from './pizzas-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Pizzas } from 'src/app/models/pizzas';
import { Sabor } from 'src/app/models/sabor';

describe('PizzasListComponent', () => {
  let component: PizzasListComponent;
  let fixture: ComponentFixture<PizzasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzasListComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(PizzasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    const pizza = new Pizzas();
    let pizzas : Pizzas[]=[];
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
    pizzas.push(pizza);

    component.lista = pizzas;
    

    fixture.detectChanges(); 

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  
});
