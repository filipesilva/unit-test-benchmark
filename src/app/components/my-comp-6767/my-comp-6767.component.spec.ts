import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6767Component } from './my-comp-6767.component';

describe('MyComp6767Component', () => {
  let component: MyComp6767Component;
  let fixture: ComponentFixture<MyComp6767Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6767Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
