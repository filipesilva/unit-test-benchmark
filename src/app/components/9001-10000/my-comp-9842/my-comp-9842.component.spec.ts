import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9842Component } from './my-comp-9842.component';

describe('MyComp9842Component', () => {
  let component: MyComp9842Component;
  let fixture: ComponentFixture<MyComp9842Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9842Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
