import { TestBed } from '@angular/core/testing';

import { ServicioConfiguracion } from './servicio-configuracion';

describe('ServicioConfiguracion', () => {
  let service: ServicioConfiguracion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioConfiguracion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
