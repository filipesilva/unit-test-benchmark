import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp380Component } from './my-comp-380.component';

describe('MyComp380Component', () => {
  let component: MyComp380Component;
  let fixture: ComponentFixture<MyComp380Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp380Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
