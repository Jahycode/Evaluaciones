import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioPage } from './formulario-page.page';

describe('FormularioPagePage', () => {
  let component: FormularioPage;
  let fixture: ComponentFixture<FormularioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
