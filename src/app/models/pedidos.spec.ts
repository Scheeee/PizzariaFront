import { Atendente } from './atendente';
import { Clientes } from './clientes';
import { Pedidos } from './pedidos';
import { Pizzas } from './pizzas';
import { Produtos } from './produtos';
import { Sabor } from './sabor';

describe('Pedidos', () => {
  it('should create an instance', () => {
    expect(new Pedidos()).toBeTruthy();
  });
  it('teste pedido', () => {
    const pedido = new Pedidos();
  
    let produto = new Produtos();
    let produtoList: Produtos[] = [];
    let pizza = new Pizzas();
    let pizzaList: Pizzas[] = [];
    let sabor = new Sabor();
    let saborList: Sabor[] = [];
    let cliente = new Clientes();
    let atendente = new Atendente();

    produto.id = 1;
    produto.nome = 'Coca-cola';
    produto.valorUnit = 12;
    produtoList.push(produto);

    sabor.id = 1;
    sabor.nome = 'Calabresa';
    sabor.ingredientes = 'Calabresa, queijo';
    saborList.push(sabor);

    pizza.id = 1;
    pizza.tamanho = 'P',
    pizza.valorUnit = 20;
    pizza.sabores = saborList;
    pizzaList.push(pizza);

    atendente.id = 1;
    atendente.username = 'admin';
    atendente.password = 'admin';

    cliente.id = 1;
    cliente.nome = 'cliente';
    cliente.telefone = '45-9802-3600'
    
    pedido.id = 1;
    pedido.produtos = produtoList;
    pedido.pizzas = pizzaList;
    pedido.atendente = atendente;
    pedido.cliente = cliente;   
    pedido.detalhes = "obs";
    pedido.entrega = false;
    pedido.dinheiro = false;

    expect(pedido.id).toEqual(1);
    expect(pedido.produtos).toEqual(produtoList);
    expect(pedido.pizzas).toEqual(pizzaList);
    expect(pedido.atendente).toEqual(atendente);
    expect(pedido.cliente).toEqual(cliente);
    expect(pedido.detalhes).toEqual('obs');
    expect(pedido.entrega).toEqual(false);
    expect(pedido.dinheiro).toEqual(false);
  });
  
});
