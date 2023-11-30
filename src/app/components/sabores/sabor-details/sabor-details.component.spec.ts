import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaborDetailsComponent } from './sabor-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { Sabor } from 'src/app/models/sabor';

describe('SaborDetailsComponent', () => {
  let component: SaborDetailsComponent;
  let fixture: ComponentFixture<SaborDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaborDetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(SaborDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    const sabor = new Sabor();
    sabor.id = 1;
    sabor.nome = 'calabresa';
    sabor.ingredientes = 'calabresa, queijo';
  
    component.sabor = sabor;
    fixture.detectChanges(); 

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Teste de 1 @Input nome ', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="name"]'));
    expect(elemento.nativeElement.ngModel).toEqual('calabresa');
  });

  it('Teste 2 de @Input nome ', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="name"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });
  it('Teste de 1 @Input ingredientes', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="ingredientes"]'));
    expect(elemento.nativeElement.ngModel).toEqual('calabresa, queijo');
  });

  it('Teste 2 de @Input ingredientes', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="ingredientes"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });
 
  it('teste salvar() ', () => {
    spyOn(component['saborService'], 'save').and.returnValue(of({}));
    component.salvar();
    expect(component['saborService'].save).toHaveBeenCalled();
  });
  it('teste editar() ', () => {
    spyOn(component['saborService'], 'update').and.returnValue(of({}));
    component.editar();
    expect(component['saborService'].update).toHaveBeenCalled();
  });
  it('teste erro ao salvar', () => {
    spyOn(window, 'alert'); 
    spyOn(component['saborService'], 'save').and.returnValue(throwError('Erro ao salvar'));
    component.salvar();
    expect(window.alert).toHaveBeenCalledWith('erro na função salvar!');
  });
  
  it('teste erro ao editar', () => {
    spyOn(window, 'alert'); 
    spyOn(component['saborService'], 'update').and.returnValue(throwError('Erro ao editar'));
    component.editar();
    expect(window.alert).toHaveBeenCalledWith('erro na função salvar!');
  });
  

  it('deve emitir evento após salvar', () => {
    const sabor = new Sabor();
    sabor.id = 1;
    sabor.nome = 'calabresa';
    sabor.ingredientes = 'calabresa, queijo';
    spyOn(component.retorno, 'emit');
    spyOn(component['saborService'], 'save').and.returnValue(of(sabor));
    component.salvar();
    expect(component.retorno.emit).toHaveBeenCalledWith(sabor);
  });
  
  it('deve emitir evento após editar', () => {
    const sabor = new Sabor();
    sabor.id = 1;
    sabor.nome = 'calabresa';
    sabor.ingredientes = 'calabresa, queijo';
    spyOn(component.retorno, 'emit');
    spyOn(component['saborService'], 'update').and.returnValue(of(sabor));
    component.editar();
    expect(component.retorno.emit).toHaveBeenCalledWith(sabor);
  });
  
});
