import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9055Component } from './my-comp-9055.component';

describe('MyComp9055Component', () => {
  let component: MyComp9055Component;
  let fixture: ComponentFixture<MyComp9055Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9055Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9055Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
