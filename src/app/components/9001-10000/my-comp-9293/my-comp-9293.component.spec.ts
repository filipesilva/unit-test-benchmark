import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9293Component } from './my-comp-9293.component';

describe('MyComp9293Component', () => {
  let component: MyComp9293Component;
  let fixture: ComponentFixture<MyComp9293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9293Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
