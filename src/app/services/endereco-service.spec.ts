import { EnderecoService } from './endereco-service';
import { TestBed } from '@angular/core/testing';

describe('EnderecoService', () => {
  let service: EnderecoService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnderecoService);
  });
  it('should create an instance', () => {
    expect(new EnderecoService()).toBeTruthy();
  });
});
