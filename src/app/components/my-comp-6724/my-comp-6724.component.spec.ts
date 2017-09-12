import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6724Component } from './my-comp-6724.component';

describe('MyComp6724Component', () => {
  let component: MyComp6724Component;
  let fixture: ComponentFixture<MyComp6724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6724Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
