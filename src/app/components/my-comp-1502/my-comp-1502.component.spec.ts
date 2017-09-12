import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1502Component } from './my-comp-1502.component';

describe('MyComp1502Component', () => {
  let component: MyComp1502Component;
  let fixture: ComponentFixture<MyComp1502Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1502Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
