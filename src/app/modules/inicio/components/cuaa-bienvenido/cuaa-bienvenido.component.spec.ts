import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuaaBienvenidoComponent } from './cuaa-bienvenido.component';

describe('CuaaBienvenidoComponent', () => {
  let component: CuaaBienvenidoComponent;
  let fixture: ComponentFixture<CuaaBienvenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuaaBienvenidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuaaBienvenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
