import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PedidosService } from './pedidos-service';
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Pedidos } from '../models/pedidos';
import { Produtos } from '../models/produtos';
import { Pizzas } from '../models/pizzas';
import { Sabor } from '../models/sabor';
import { Clientes } from '../models/clientes';
import { Atendente } from '../models/atendente';

describe('PedidosService', () => {
  let service: PedidosService;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]});
    service = TestBed.inject(PedidosService);
  });
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
  it('teste post', () => {
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
    spyOn(service['http'], 'post').and.callThrough();
    service.save(pedido).subscribe();
    expect(service['http'].post).toHaveBeenCalledWith(service.API, pedido);
  });

  it('teste update', () => {

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
    spyOn(service['http'], 'put').and.callThrough();
    service.update(pedido, 1).subscribe();
    expect(service['http'].put).toHaveBeenCalledWith(service.API + '/1', pedido);
  });
  it('teste cancelar', () => {

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
    spyOn(service['http'], 'put').and.callThrough();
    service.cancelar(pedido, 1).subscribe();
    expect(service['http'].put).toHaveBeenCalledWith(service.API + '/1/cancelar', pedido);
  });
  it('teste finalizar', () => {

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
    spyOn(service['http'], 'put').and.callThrough();
    service.finalizar(pedido, 1).subscribe();
    expect(service['http'].put).toHaveBeenCalledWith(service.API + '/1/encerrar', pedido);
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

  it('teste ativos', () => {
    spyOn(service['http'], 'get').and.callThrough();
    service.listAtivos().subscribe();
    expect(service['http'].get).toHaveBeenCalledWith(service.API+ '/ativos');
  });
  it('teste finalizados', () => {
    spyOn(service['http'], 'get').and.callThrough();
    service.listFinalizados().subscribe();
    expect(service['http'].get).toHaveBeenCalledWith(service.API+ '/finalizados');
  });
  it('teste cancelados', () => {
    spyOn(service['http'], 'get').and.callThrough();
    service.listCancelados().subscribe();
    expect(service['http'].get).toHaveBeenCalledWith(service.API+ '/cancelados');
  });
  it('teste comanda', () => {
    spyOn(service['http'], 'get').and.callThrough();
    service.comanda(1,1).subscribe();
    expect(service['http'].get).toHaveBeenCalledWith(service.API+ '/comanda/1/1');
  });
  it('teste getCliente', () => {
    spyOn(service['http'], 'get').and.callThrough();
    service.getCliente(1).subscribe();
    expect(service['http'].get).toHaveBeenCalledWith(service.API+ '/cliente/1');
  });
  it('teste totais', () => {
    spyOn(service['http'], 'get').and.callThrough();
    service.totais('12-02-2022').subscribe();
    expect(service['http'].get).toHaveBeenCalledWith(service.API+ '/data/12-02-2022');
  });

});
