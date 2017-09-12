import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9743Component } from './my-comp-9743.component';

describe('MyComp9743Component', () => {
  let component: MyComp9743Component;
  let fixture: ComponentFixture<MyComp9743Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9743Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
