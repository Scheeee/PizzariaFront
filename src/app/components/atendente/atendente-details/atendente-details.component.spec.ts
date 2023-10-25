import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendenteDetailsComponent } from './atendente-details.component';

describe('AtendenteDetailsComponent', () => {
  let component: AtendenteDetailsComponent;
  let fixture: ComponentFixture<AtendenteDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtendenteDetailsComponent]
    });
    fixture = TestBed.createComponent(AtendenteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
