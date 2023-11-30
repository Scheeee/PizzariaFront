import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Login } from 'src/app/models/login';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {

    let login = new Login();
    
    login.username = 'admin';
    login.password = 'admin';

    component.login = login;
    fixture.detectChanges(); //refresh

  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Teste de 1 login', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="username"]'));
    expect(elemento.nativeElement.ngModel).toEqual('admin');
  });

  it('Teste 2 de login', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="username"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de 1 password', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="password"]'));
    expect(elemento.nativeElement.ngModel).toEqual('admin');
  });

  it('Teste 2 password', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="password"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('teste botão', () => {
    spyOn(component, 'logar');
    const form = fixture.debugElement.query(By.css('button'));
    form.triggerEventHandler('click', null);
    expect(component.logar).toHaveBeenCalled();
  });

  
});
