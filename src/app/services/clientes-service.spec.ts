import { ClientesService } from './clientes-service';
import { TestBed } from '@angular/core/testing';


describe('ClientesService', () => {
  let service: ClientesService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesService);
  })
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
