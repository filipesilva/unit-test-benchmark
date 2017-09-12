import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp287Component } from './my-comp-287.component';

describe('MyComp287Component', () => {
  let component: MyComp287Component;
  let fixture: ComponentFixture<MyComp287Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp287Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
