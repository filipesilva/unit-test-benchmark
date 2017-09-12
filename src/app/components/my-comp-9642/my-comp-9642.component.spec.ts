import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9642Component } from './my-comp-9642.component';

describe('MyComp9642Component', () => {
  let component: MyComp9642Component;
  let fixture: ComponentFixture<MyComp9642Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9642Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
