import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendenteDetailsComponent } from './atendente-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Atendente } from 'src/app/models/atendente';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('AtendenteDetailsComponent', () => {
  let component: AtendenteDetailsComponent;
  let fixture: ComponentFixture<AtendenteDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ],
      declarations: [AtendenteDetailsComponent]
    });
    
    fixture = TestBed.createComponent(AtendenteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
    let atendente = new Atendente();
    atendente.id = 1;
    atendente.username = 'admin';
    atendente.password = 'admin';
    atendente.role = 'ADMIN';
  
    component.atendente = atendente;
    fixture.detectChanges(); 

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Teste de 1 @Input name ', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="name"]'));
    expect(elemento.nativeElement.ngModel).toEqual('admin');
  });

  it('Teste 2 de @Input name ', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="name"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });
  it('Teste de 1 @Input senha ', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="password"]'));
    expect(elemento.nativeElement.ngModel).toEqual('admin');
  });

  it('Teste 2 de @Input senha', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="password"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });
  it('Teste de 1 @Input role', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="role"]'));
    expect(elemento.nativeElement.ngModel).toEqual('ADMIN');
  });

  it('Teste 2 de @Input role', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="role"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('teste salvar() ', () => {
    spyOn(component['atendenteService'], 'save').and.returnValue(of({}));
    component.salvar();
    expect(component['atendenteService'].save).toHaveBeenCalled();
  });
  it('teste editar() ', () => {
    spyOn(component['atendenteService'], 'update').and.returnValue(of({}));
    component.editar();
    expect(component['atendenteService'].update).toHaveBeenCalled();
  });
  it('teste erro ao salvar', () => {
    spyOn(window, 'alert'); 
    spyOn(component['atendenteService'], 'save').and.returnValue(throwError('Erro ao salvar'));
    component.salvar();
    expect(window.alert).toHaveBeenCalledWith('erro na função salvar!');
  });
  
  it('teste erro ao editar', () => {
    spyOn(window, 'alert'); 
    spyOn(component['atendenteService'], 'update').and.returnValue(throwError('Erro ao editar'));
    component.editar();
    expect(window.alert).toHaveBeenCalledWith('erro na função salvar!');
  });
  

  it('deve emitir evento após salvar', () => {
    let atendente = new Atendente();
    atendente.id = 1;
    atendente.username = 'admin';
    atendente.password = 'admin';
    atendente.role = 'ADMIN';
    spyOn(component.retorno, 'emit');
    spyOn(component['atendenteService'], 'save').and.returnValue(of(atendente));
    component.salvar();
    expect(component.retorno.emit).toHaveBeenCalledWith(atendente);
  });
  
  it('deve emitir evento após editar', () => {
    let atendente = new Atendente();
    atendente.id = 1;
    atendente.username = 'admin';
    atendente.password = 'admin';
    atendente.role = 'ADMIN';
    spyOn(component.retorno, 'emit');
    spyOn(component['atendenteService'], 'update').and.returnValue(of(atendente));
    component.editar();
    expect(component.retorno.emit).toHaveBeenCalledWith(atendente);
  });
  
});
