import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiguelelmaquinaPage } from './miguelelmaquina.page';

describe('MiguelelmaquinaPage', () => {
  let component: MiguelelmaquinaPage;
  let fixture: ComponentFixture<MiguelelmaquinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiguelelmaquinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiguelelmaquinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
