import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiaselhumildePage } from './matiaselhumilde.page';

describe('MatiaselhumildePage', () => {
  let component: MatiaselhumildePage;
  let fixture: ComponentFixture<MatiaselhumildePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatiaselhumildePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiaselhumildePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
