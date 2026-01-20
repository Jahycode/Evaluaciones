import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvisosPage } from './avisos-page.page';

describe('AvisosPagePage', () => {
  let component: AvisosPage;
  let fixture: ComponentFixture<AvisosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
