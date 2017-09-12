import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9955Component } from './my-comp-9955.component';

describe('MyComp9955Component', () => {
  let component: MyComp9955Component;
  let fixture: ComponentFixture<MyComp9955Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9955Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
