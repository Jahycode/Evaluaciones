import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaConfiguracionPage } from './pagina-configuracion.page';

describe('PaginaConfiguracionPage', () => {
  let component: PaginaConfiguracionPage;
  let fixture: ComponentFixture<PaginaConfiguracionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaConfiguracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
