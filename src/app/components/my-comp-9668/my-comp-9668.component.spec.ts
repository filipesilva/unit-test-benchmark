import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9668Component } from './my-comp-9668.component';

describe('MyComp9668Component', () => {
  let component: MyComp9668Component;
  let fixture: ComponentFixture<MyComp9668Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9668Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
