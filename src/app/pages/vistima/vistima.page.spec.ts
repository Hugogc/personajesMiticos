import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistimaPage } from './vistima.page';

describe('VistimaPage', () => {
  let component: VistimaPage;
  let fixture: ComponentFixture<VistimaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistimaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistimaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
