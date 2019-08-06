import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContigonobichoPage } from './contigonobicho.page';

describe('ContigonobichoPage', () => {
  let component: ContigonobichoPage;
  let fixture: ComponentFixture<ContigonobichoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContigonobichoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContigonobichoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
