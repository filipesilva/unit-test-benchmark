import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9449Component } from './my-comp-9449.component';

describe('MyComp9449Component', () => {
  let component: MyComp9449Component;
  let fixture: ComponentFixture<MyComp9449Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9449Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
