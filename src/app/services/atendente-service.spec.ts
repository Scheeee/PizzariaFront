import { TestBed } from '@angular/core/testing';
import { AtendenteService } from './atendente-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Atendente } from '../models/atendente';

describe('AtendenteService', () => {
  let service: AtendenteService;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]});
    service = TestBed.inject(AtendenteService);
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });

  it('teste post', () => {

    let postMock = new Atendente();
    postMock.username = 'testuser';
    postMock.password = 'testpassword';
    postMock.role = 'ADMIN';
    spyOn(service['http'], 'post').and.callThrough();
    service.save(postMock).subscribe();
    expect(service['http'].post).toHaveBeenCalledWith(service.API, postMock);
  });
  it('teste update', () => {

    let postMock = new Atendente();
    postMock.username = 'testuser';
    postMock.password = 'testpassword';
    postMock.role = 'ADMIN';
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
