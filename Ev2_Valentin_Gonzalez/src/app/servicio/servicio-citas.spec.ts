import { TestBed } from '@angular/core/testing';

import { ServicioCitas } from './servicio-citas';

describe('ServicioCitas', () => {
  let service: ServicioCitas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCitas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
