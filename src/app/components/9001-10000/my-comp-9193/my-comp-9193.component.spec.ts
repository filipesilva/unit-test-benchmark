import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9193Component } from './my-comp-9193.component';

describe('MyComp9193Component', () => {
  let component: MyComp9193Component;
  let fixture: ComponentFixture<MyComp9193Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9193Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
