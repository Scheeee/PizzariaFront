import { TestBed } from '@angular/core/testing';
import { ProdutosService } from './produtos-service';

describe('Produtos', () => {
  let service: ProdutosService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosService);
  });
 
  it('should create an instance', () => {
    expect(new ProdutosService()).toBeTruthy();
  });
});
