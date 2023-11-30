import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosListComponent } from './pedidos-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Pedidos } from 'src/app/models/pedidos';
import { Produtos } from 'src/app/models/produtos';
import { Pizzas } from 'src/app/models/pizzas';
import { Sabor } from 'src/app/models/sabor';
import { Clientes } from 'src/app/models/clientes';
import { Atendente } from 'src/app/models/atendente';

describe('PedidosListComponent', () => {
  let component: PedidosListComponent;
  let fixture: ComponentFixture<PedidosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosListComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(PedidosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => { 
    const pedido = new Pedidos();
    let pedidos : Pedidos[] = [];
  
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

    pedidos.push(pedido);

    component.lista = pedidos;
    fixture.detectChanges(); //refresh
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('renderização', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Lista de pedidos');
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
  it('teste do botão finalizar', () => {
    spyOn(component, 'finalizar');
    const editButton = fixture.debugElement.nativeElement.querySelector('button[name="finalizar"]'); 
    editButton.click();
    expect(component.finalizar).toHaveBeenCalled();
  });
  it('teste do botão comanda', () => {
    spyOn(component, 'comanda');
    const editButton = fixture.debugElement.nativeElement.querySelector('button[name="comanda"]'); 
    editButton.click();
    expect(component.comanda).toHaveBeenCalled();
  });
  it('teste do botão cancelar', () => {
    spyOn(component, 'cancelar');
    const editButton = fixture.debugElement.nativeElement.querySelector('button[name="cancelar"]'); 
    editButton.click();
    expect(component.cancelar).toHaveBeenCalled();
  });

 
});
