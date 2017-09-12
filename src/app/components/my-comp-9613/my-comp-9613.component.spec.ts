import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9613Component } from './my-comp-9613.component';

describe('MyComp9613Component', () => {
  let component: MyComp9613Component;
  let fixture: ComponentFixture<MyComp9613Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9613Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
