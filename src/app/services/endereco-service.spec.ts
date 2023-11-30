import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EnderecoService } from './endereco-service';
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Endereco } from '../models/endereco';
import { Clientes } from '../models/clientes';

describe('EnderecoService', () => {
  let service: EnderecoService;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]});
    service = TestBed.inject(EnderecoService);
  });
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });

  it('teste post', () => {
    const cliente = new Clientes();
    const endereco = new Endereco();

    cliente.id = 1;
    cliente.nome = 'ana';
    cliente.telefone = '45-9999-4533';
    
    endereco.rua= 'rua';
    endereco.complemento = 'esquina';
    endereco.id = 1;
    endereco.numero = '123';
    endereco.cliente = cliente;
    spyOn(service['http'], 'post').and.callThrough();
    service.save(endereco).subscribe();
    expect(service['http'].post).toHaveBeenCalledWith(service.API, endereco);
  });

  it('teste update', () => {

    const cliente = new Clientes();
    const endereco = new Endereco();

    cliente.id = 1;
    cliente.nome = 'ana';
    cliente.telefone = '45-9999-4533';
    
    endereco.rua= 'rua';
    endereco.complemento = 'esquina';
    endereco.id = 1;
    endereco.numero = '123';
    endereco.cliente = cliente;
    spyOn(service['http'], 'put').and.callThrough();
    service.update(1, endereco).subscribe();
    expect(service['http'].put).toHaveBeenCalledWith(service.API + '/1', endereco);
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
