import { SaborService } from './sabor-service';
import { TestBed } from '@angular/core/testing';

describe('SaborService', () => {
  let service: SaborService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaborService);
  });
  it('should create an instance', () => {
    expect(new SaborService()).toBeTruthy();
  });
});
