import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1164Component } from './my-comp-1164.component';

describe('MyComp1164Component', () => {
  let component: MyComp1164Component;
  let fixture: ComponentFixture<MyComp1164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
