import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChukiziezaPage } from './chukizieza.page';

describe('ChukiziezaPage', () => {
  let component: ChukiziezaPage;
  let fixture: ComponentFixture<ChukiziezaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChukiziezaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChukiziezaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
