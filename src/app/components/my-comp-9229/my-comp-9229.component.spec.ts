import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9229Component } from './my-comp-9229.component';

describe('MyComp9229Component', () => {
  let component: MyComp9229Component;
  let fixture: ComponentFixture<MyComp9229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9229Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
