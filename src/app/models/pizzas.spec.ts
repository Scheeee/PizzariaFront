import { Pizzas } from './pizzas';
import { Sabor } from './sabor';

describe('Pizzas', () => {
  it('should create an instance', () => {
    expect(new Pizzas()).toBeTruthy();
  });

  it('teste pizza', () => {
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

    expect(pizza.id).toEqual(1);
    expect(pizza.tamanho).toEqual('P');
    expect(pizza.sabores.length).toEqual(1);
    expect(pizza.valorUnit).toEqual(10);
  });
});
