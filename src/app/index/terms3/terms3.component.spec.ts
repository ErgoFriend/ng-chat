import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Terms3Component } from './terms3.component';

describe('Terms3Component', () => {
  let component: Terms3Component;
  let fixture: ComponentFixture<Terms3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Terms3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Terms3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
