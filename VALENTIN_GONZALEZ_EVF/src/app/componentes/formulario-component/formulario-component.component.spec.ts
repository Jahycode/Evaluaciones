import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormularioComponentComponent } from './formulario-component.component';

describe('FormularioComponentComponent', () => {
  let component: FormularioComponentComponent;
  let fixture: ComponentFixture<FormularioComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormularioComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
