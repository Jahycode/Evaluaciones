import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContenedorCitasComponent } from './contenedor-citas.component';

describe('ContenedorCitasComponent', () => {
  let component: ContenedorCitasComponent;
  let fixture: ComponentFixture<ContenedorCitasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ContenedorCitasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContenedorCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
