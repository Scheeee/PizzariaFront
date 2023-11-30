import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PizzasServices } from './pizzas-services';
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Pizzas } from '../models/pizzas';
import { Sabor } from '../models/sabor';

describe('PizzasServices', () => {
  let service: PizzasServices;
  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]});
    service = TestBed.inject(PizzasServices);
  });
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
  it('teste post', () => {
    const pizza = new Pizzas();

    let sabor = new Sabor();

    sabor.id= 1;
    sabor.nome= 'calabresa';
    sabor.ingredientes= 'calabresa...';

    pizza.id = 1;
    pizza.tamanho = 'P';
    pizza.sabores = [];
    pizza.sabores.push(sabor);
    pizza.valorUnit = 10
    spyOn(service['http'], 'post').and.callThrough();
    service.save(pizza).subscribe();
    expect(service['http'].post).toHaveBeenCalledWith(service.API, pizza);
  });

  it('teste update', () => {

    const pizza = new Pizzas();

    let sabor = new Sabor();

    sabor.id= 1;
    sabor.nome= 'calabresa';
    sabor.ingredientes= 'calabresa...';

    pizza.id = 1;
    pizza.tamanho = 'P';
    pizza.sabores = [];
    pizza.sabores.push(sabor);
    pizza.valorUnit = 10
    spyOn(service['http'], 'put').and.callThrough();
    service.update(pizza, 1).subscribe();
    expect(service['http'].put).toHaveBeenCalledWith(service.API + '/1', pizza);
  });
  it('teste getList', () => {
    spyOn(service['http'], 'get').and.callThrough();
    service.listAll().subscribe();
    expect(service['http'].get).toHaveBeenCalledWith(service.API+ '/lista');
  });
  
  it('teste delete', () => {
    spyOn(service['http'], 'delete').and.callThrough();
    service.delete(1).subscribe();
    expect(service['http'].delete).toHaveBeenCalledWith(service.API+ '/1');
  });
});
