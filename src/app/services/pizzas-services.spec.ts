import { PizzasServices } from './pizzas-services';
import { TestBed } from '@angular/core/testing';

describe('PizzasServices', () => {
  let service: PizzasServices;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzasServices);
  });
  it('should create an instance', () => {
    expect(new PizzasServices()).toBeTruthy();
  });
});
