import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaisComponent } from './totais.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Total } from 'src/app/models/total';
import { By } from '@angular/platform-browser';
import { Observable, of, throwError } from 'rxjs';

describe('TotaisComponent', () => {
  let component: TotaisComponent;
  let fixture: ComponentFixture<TotaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotaisComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(TotaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    const total = new Total();
    total.pedidosCancelados= 0;
    total.pedidosCartao = 1;
    total.pedidosDinheiro = 0;
    total.pedidosDoDia = 1;
    total.pedidosEncerrados = 1;
    total.pedidosEntregues = 1
    total.pedidosRetirados = 0;
    total.totalValorPedidos = 1000;   
    
   
    component.total = total;
    fixture.detectChanges(); 

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renderização', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('TOTAIS');
  });

  it('teste de tabela', () => {
    const compiled = fixture.debugElement.nativeElement;
    const tableRows = compiled.querySelectorAll('table tbody tr');
    expect(tableRows.length).toEqual(8);
  });
 
  it('teste salvar() ', () => {
    spyOn(component['pedidosService'], 'totais').and.returnValue(new Observable<Total>);
    component.totais();
    expect(component['pedidosService'].totais).toHaveBeenCalled();
  });

  it('teste erro ao salvar', () => {
    spyOn(window, 'alert'); 
    spyOn(component['pedidosService'], 'totais').and.returnValue(throwError('Algo deu errado'));
    component.totais();
    expect(window.alert).toHaveBeenCalledWith('Algo deu errado!');
  });
  
});
