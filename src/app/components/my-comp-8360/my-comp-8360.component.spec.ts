import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8360Component } from './my-comp-8360.component';

describe('MyComp8360Component', () => {
  let component: MyComp8360Component;
  let fixture: ComponentFixture<MyComp8360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
