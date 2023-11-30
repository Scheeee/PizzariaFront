import { TestBed } from '@angular/core/testing';
import { ProdutosService } from './produtos-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Produtos } from '../models/produtos';

describe('Produtos', () => {
  let service: ProdutosService;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]});
    service = TestBed.inject(ProdutosService);
  });
 
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
  it('teste post', () => {
    const produto = new Produtos();

    produto.id = 1;
    produto.detalhes = 'obs';
    produto.nome = 'coca';
    produto.valorUnit = 10;
    spyOn(service['http'], 'post').and.callThrough();
    service.save(produto).subscribe();
    expect(service['http'].post).toHaveBeenCalledWith(service.API, produto);
  });

  it('teste update', () => {

    const produto = new Produtos();

    produto.id = 1;
    produto.detalhes = 'obs';
    produto.nome = 'coca';
    produto.valorUnit = 10;
    spyOn(service['http'], 'put').and.callThrough();
    service.update(produto, 1).subscribe();
    expect(service['http'].put).toHaveBeenCalledWith(service.API + '/1', produto);
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
