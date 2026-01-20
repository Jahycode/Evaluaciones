import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AvisosComponentComponent } from './avisos-component.component';

describe('AvisosComponentComponent', () => {
  let component: AvisosComponentComponent;
  let fixture: ComponentFixture<AvisosComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AvisosComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvisosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
