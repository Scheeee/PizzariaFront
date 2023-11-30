import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ClientesService } from './clientes-service';
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Clientes } from '../models/clientes';


describe('ClientesService', () => {
  let service: ClientesService;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]});
    service = TestBed.inject(ClientesService);
  })
 
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });

  it('teste post', () => {
    let postMock = new Clientes();
    postMock.id = 1;
    postMock.nome = 'cliente';
    postMock.telefone = '45-9800-0000'
    
    spyOn(service['http'], 'post').and.callThrough();
    service.save(postMock).subscribe();
    expect(service['http'].post).toHaveBeenCalledWith(service.API, postMock);
  });

  it('teste update', () => {

    let postMock = new Clientes();
    postMock.id = 1;
    postMock.nome = 'cliente';
    postMock.telefone = '45-9800-0000'
    spyOn(service['http'], 'put').and.callThrough();
    service.update(1, postMock).subscribe();
    expect(service['http'].put).toHaveBeenCalledWith(service.API + '/1', postMock);
  });
  it('teste getList', () => {
    spyOn(service['http'], 'get').and.callThrough();
    service.listAll().subscribe();
    expect(service['http'].get).toHaveBeenCalledWith(service.API+ '/lista');
  });
  it('teste listNome', () => {
    spyOn(service['http'], 'get').and.callThrough();
    service.listNome('nome').subscribe();
    expect(service['http'].get).toHaveBeenCalledWith(service.API+ '/nome');
  });

  it('teste delete', () => {
    spyOn(service['http'], 'delete').and.callThrough();
    service.delete(1).subscribe();
    expect(service['http'].delete).toHaveBeenCalledWith(service.API+ '/1');
  });
});
