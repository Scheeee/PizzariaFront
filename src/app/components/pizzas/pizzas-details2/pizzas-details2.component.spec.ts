import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasDetails2Component } from './pizzas-details2.component';

describe('PizzasDetails2Component', () => {
  let component: PizzasDetails2Component;
  let fixture: ComponentFixture<PizzasDetails2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzasDetails2Component]
    });
    fixture = TestBed.createComponent(PizzasDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
