import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaborDetailsComponent } from './sabor-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
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
  
});
