import { TestBed } from '@angular/core/testing';

import { ServicioPersistencia } from './servicio-persistencia';

describe('ServicioPersistencia', () => {
  let service: ServicioPersistencia;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPersistencia);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
