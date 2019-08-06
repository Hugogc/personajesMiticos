import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrachoarboladaPage } from './borrachoarbolada.page';

describe('BorrachoarboladaPage', () => {
  let component: BorrachoarboladaPage;
  let fixture: ComponentFixture<BorrachoarboladaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrachoarboladaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrachoarboladaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
