import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8164Component } from './my-comp-8164.component';

describe('MyComp8164Component', () => {
  let component: MyComp8164Component;
  let fixture: ComponentFixture<MyComp8164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
