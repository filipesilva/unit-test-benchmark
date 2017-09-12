import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9623Component } from './my-comp-9623.component';

describe('MyComp9623Component', () => {
  let component: MyComp9623Component;
  let fixture: ComponentFixture<MyComp9623Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9623Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
