import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9128Component } from './my-comp-9128.component';

describe('MyComp9128Component', () => {
  let component: MyComp9128Component;
  let fixture: ComponentFixture<MyComp9128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9128Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
