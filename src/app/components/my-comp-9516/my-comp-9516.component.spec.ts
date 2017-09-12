import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9516Component } from './my-comp-9516.component';

describe('MyComp9516Component', () => {
  let component: MyComp9516Component;
  let fixture: ComponentFixture<MyComp9516Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9516Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
