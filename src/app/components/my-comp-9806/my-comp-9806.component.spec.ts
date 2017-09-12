import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9806Component } from './my-comp-9806.component';

describe('MyComp9806Component', () => {
  let component: MyComp9806Component;
  let fixture: ComponentFixture<MyComp9806Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9806Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
