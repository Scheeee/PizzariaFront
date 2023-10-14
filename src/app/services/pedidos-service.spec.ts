import { PedidosService } from './pedidos-service';
import { TestBed } from '@angular/core/testing';

describe('PedidosService', () => {
  let service: PedidosService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidosService);
  });
  it('should create an instance', () => {
    expect(new PedidosService()).toBeTruthy();
  });
});
