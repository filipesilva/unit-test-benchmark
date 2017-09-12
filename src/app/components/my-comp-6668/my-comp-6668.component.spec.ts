import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6668Component } from './my-comp-6668.component';

describe('MyComp6668Component', () => {
  let component: MyComp6668Component;
  let fixture: ComponentFixture<MyComp6668Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6668Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
