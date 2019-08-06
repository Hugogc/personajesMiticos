import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardiandelasestrellasPage } from './guardiandelasestrellas.page';

describe('GuardiandelasestrellasPage', () => {
  let component: GuardiandelasestrellasPage;
  let fixture: ComponentFixture<GuardiandelasestrellasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardiandelasestrellasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardiandelasestrellasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
