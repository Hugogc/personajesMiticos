import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElvanidosoPage } from './elvanidoso.page';

describe('ElvanidosoPage', () => {
  let component: ElvanidosoPage;
  let fixture: ComponentFixture<ElvanidosoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElvanidosoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElvanidosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
