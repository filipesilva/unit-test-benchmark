import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8306Component } from './my-comp-8306.component';

describe('MyComp8306Component', () => {
  let component: MyComp8306Component;
  let fixture: ComponentFixture<MyComp8306Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8306Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
