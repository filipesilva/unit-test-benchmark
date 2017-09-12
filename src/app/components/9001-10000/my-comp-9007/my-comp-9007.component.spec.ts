import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9007Component } from './my-comp-9007.component';

describe('MyComp9007Component', () => {
  let component: MyComp9007Component;
  let fixture: ComponentFixture<MyComp9007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
