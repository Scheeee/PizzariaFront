import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SaborService } from './sabor-service';
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Sabor } from '../models/sabor';

describe('SaborService', () => {
  let service: SaborService;
  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]});
    service = TestBed.inject(SaborService);
  });
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
  it('teste post', () => {
    const sabor = new Sabor();
    sabor.id = 1;
    sabor.nome = 'calabresa';
    sabor.ingredientes = 'calabresa, queijo';
    spyOn(service['http'], 'post').and.callThrough();
    service.save(sabor).subscribe();
    expect(service['http'].post).toHaveBeenCalledWith(service.API, sabor);
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
