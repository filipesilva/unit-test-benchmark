import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9270Component } from './my-comp-9270.component';

describe('MyComp9270Component', () => {
  let component: MyComp9270Component;
  let fixture: ComponentFixture<MyComp9270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
