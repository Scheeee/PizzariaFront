import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoDetailsComponent } from './pedido-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Produtos } from 'src/app/models/produtos';
import { Pizzas } from 'src/app/models/pizzas';
import { Sabor } from 'src/app/models/sabor';
import { Clientes } from 'src/app/models/clientes';
import { Atendente } from 'src/app/models/atendente';
import { of, throwError } from 'rxjs';
import { Pedidos } from 'src/app/models/pedidos';

describe('PedidoDetailsComponent', () => {
  let component: PedidoDetailsComponent;
  let fixture: ComponentFixture<PedidoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoDetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(PedidoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => { 
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
    sabor.nome = 'Coca-cola';
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
    
    component.pedido.id = 1;
    component.pedido.produtos = produtoList;
    component.pedido.pizzas = pizzaList;
    component.pedido.atendente = atendente;
    component.pedido.cliente = cliente;   
    component.pedido.detalhes = "obs";
    component.pedido.entrega = false;
    component.pedido.dinheiro = false;
    fixture.detectChanges(); 
  });

  it('should create', () => { 
    expect(component).toBeTruthy();
  });

  it('Teste de 1 @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="exampleInputText1"]'));
    expect(elemento.nativeElement.ngModel).toEqual('obs');
  });

  it('Teste 2 de @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="exampleInputText1"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });
  it('Teste cliente', () => {
    let elemento = fixture.debugElement.query(By.css('p[name="cliente"]'));
    expect(elemento.attributes).not.toBeNull();
  });
  it('Teste cliente 1', () => {
    let elemento = fixture.debugElement.query(By.css('[name="cliente"]'));
    expect(elemento.nativeElement.textContent).toEqual('Cliente: cliente');
  });
  it('Teste atendente', () => {
    let elemento = fixture.debugElement.query(By.css('p[name="atendente"]'));
    expect(elemento.attributes).not.toBeNull();
  });
  it('Teste atendente 1', () => {
    let elemento = fixture.debugElement.query(By.css('[name="atendente"]'));
    expect(elemento.nativeElement.textContent).toEqual('Atendente: admin');
  });
  it('Teste de tamanho da lista de produtos ', () => {
    expect(component.pedido.produtos.length).toEqual(1); 
  });
  it('Teste de elemento na tabela', () => {
    let elementoNaTabela = fixture.debugElement.query(By.css('table tbody tr')); 
    expect(elementoNaTabela).not.toBeNull();
  });

  it('alert entrega sem endereço', () => {
    spyOn(window, 'alert');
    component.pedido.entrega = true;    
    component.salvar();
    expect(window.alert).toHaveBeenCalledWith('o pedido deve conter um endereço para entrega!');
  });
  it('teste salvar() ', () => {
    spyOn(component['pedidosService'], 'save').and.returnValue(of({}));
    component.salvar();
    expect(component['pedidosService'].save).toHaveBeenCalled();
  });
  it('teste editar() ', () => {
    spyOn(component['pedidosService'], 'update').and.returnValue(of({}));
    component.editar();
    expect(component['pedidosService'].update).toHaveBeenCalled();
  });
  it('teste entrega', () => {
    component.pedido.entrega = false;
    component.checkboxEntrega();
    expect(component.pedido.entrega).toBe(true);
  });
  it('teste dinheiro', () => {
    component.pedido.dinheiro= false;
    component.checkboxDinheiro();
    expect(component.pedido.dinheiro).toBe(true);
  });
  it('teste erro ao salvar', () => {
    spyOn(window, 'alert'); 
    spyOn(component['pedidosService'], 'save').and.returnValue(throwError('Erro ao salvar'));
    component.salvar();
    expect(window.alert).toHaveBeenCalledWith('erro na função salvar!');
  });
  
  it('teste erro ao editar', () => {
    spyOn(window, 'alert'); 
    spyOn(component['pedidosService'], 'update').and.returnValue(throwError('Erro ao editar'));
    component.editar();
    expect(window.alert).toHaveBeenCalledWith('erro na função editar!');
  });
  

  it('emitir evento após salvar', () => {
    let produto = new Produtos();
    let produtoList: Produtos[] = [];
    let pizza = new Pizzas();
    let pizzaList: Pizzas[] = [];
    let sabor = new Sabor();
    let saborList: Sabor[] = [];
    let cliente = new Clientes();
    let atendente = new Atendente();
    let pedido = new Pedidos();

    produto.id = 1;
    produto.nome = 'Coca-cola';
    produto.valorUnit = 12;
    produtoList.push(produto);

    sabor.id = 1;
    sabor.nome = 'Coca-cola';
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

    spyOn(component.retorno, 'emit');
    spyOn(component['pedidosService'], 'save').and.returnValue(of(pedido));
    component.salvar();
    expect(component.retorno.emit).toHaveBeenCalledWith(pedido);
  });
  
  it('emitir evento após editar', () => {
    let produto = new Produtos();
    let produtoList: Produtos[] = [];
    let pizza = new Pizzas();
    let pizzaList: Pizzas[] = [];
    let sabor = new Sabor();
    let saborList: Sabor[] = [];
    let cliente = new Clientes();
    let atendente = new Atendente();
    let pedido = new Pedidos();

    produto.id = 1;
    produto.nome = 'Coca-cola';
    produto.valorUnit = 12;
    produtoList.push(produto);

    sabor.id = 1;
    sabor.nome = 'Coca-cola';
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
    spyOn(component.retorno, 'emit');
    spyOn(component['pedidosService'], 'update').and.returnValue(of(pedido));
    component.editar();
    expect(component.retorno.emit).toHaveBeenCalledWith(pedido);
  });


});
