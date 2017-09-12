import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9827Component } from './my-comp-9827.component';

describe('MyComp9827Component', () => {
  let component: MyComp9827Component;
  let fixture: ComponentFixture<MyComp9827Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9827Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
