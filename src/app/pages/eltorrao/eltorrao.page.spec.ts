import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EltorraoPage } from './eltorrao.page';

describe('EltorraoPage', () => {
  let component: EltorraoPage;
  let fixture: ComponentFixture<EltorraoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EltorraoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EltorraoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
