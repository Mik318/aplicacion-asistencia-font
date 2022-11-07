import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuaaRecuperarContraseniaComponent } from './cuaa-recuperar-contrasenia.component';

describe('CuaaRecuperarContraseniaComponent', () => {
  let component: CuaaRecuperarContraseniaComponent;
  let fixture: ComponentFixture<CuaaRecuperarContraseniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuaaRecuperarContraseniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuaaRecuperarContraseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
