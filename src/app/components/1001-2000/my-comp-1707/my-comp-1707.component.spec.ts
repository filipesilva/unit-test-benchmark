import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1707Component } from './my-comp-1707.component';

describe('MyComp1707Component', () => {
  let component: MyComp1707Component;
  let fixture: ComponentFixture<MyComp1707Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1707Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
