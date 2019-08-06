import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LosdeleclipsePage } from './losdeleclipse.page';

describe('LosdeleclipsePage', () => {
  let component: LosdeleclipsePage;
  let fixture: ComponentFixture<LosdeleclipsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LosdeleclipsePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LosdeleclipsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
