import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosDetailsComponent } from './produtos-details.component';

describe('ProdutosDetailsComponent', () => {
  let component: ProdutosDetailsComponent;
  let fixture: ComponentFixture<ProdutosDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosDetailsComponent]
    });
    fixture = TestBed.createComponent(ProdutosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
