import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VisualizacionCitasComponent } from './visualizacion-citas.component';

describe('VisualizacionCitasComponent', () => {
  let component: VisualizacionCitasComponent;
  let fixture: ComponentFixture<VisualizacionCitasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [VisualizacionCitasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizacionCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
