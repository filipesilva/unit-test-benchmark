import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp984Component } from './my-comp-984.component';

describe('MyComp984Component', () => {
  let component: MyComp984Component;
  let fixture: ComponentFixture<MyComp984Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp984Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
