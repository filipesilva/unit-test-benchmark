import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2164Component } from './my-comp-2164.component';

describe('MyComp2164Component', () => {
  let component: MyComp2164Component;
  let fixture: ComponentFixture<MyComp2164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
