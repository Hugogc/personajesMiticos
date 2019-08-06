import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisabencomomepongoPage } from './sisabencomomepongo.page';

describe('SisabencomomepongoPage', () => {
  let component: SisabencomomepongoPage;
  let fixture: ComponentFixture<SisabencomomepongoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisabencomomepongoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisabencomomepongoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
