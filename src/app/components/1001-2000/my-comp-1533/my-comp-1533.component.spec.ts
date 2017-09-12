import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1533Component } from './my-comp-1533.component';

describe('MyComp1533Component', () => {
  let component: MyComp1533Component;
  let fixture: ComponentFixture<MyComp1533Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1533Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
