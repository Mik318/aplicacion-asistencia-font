import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuaaMenuComponent } from './cuaa-menu.component';

describe('CuaaMenuComponent', () => {
  let component: CuaaMenuComponent;
  let fixture: ComponentFixture<CuaaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuaaMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuaaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
