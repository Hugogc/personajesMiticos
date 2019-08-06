import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiadopardaPage } from './liadoparda.page';

describe('LiadopardaPage', () => {
  let component: LiadopardaPage;
  let fixture: ComponentFixture<LiadopardaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiadopardaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiadopardaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
