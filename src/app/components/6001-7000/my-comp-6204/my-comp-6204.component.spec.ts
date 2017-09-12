import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6204Component } from './my-comp-6204.component';

describe('MyComp6204Component', () => {
  let component: MyComp6204Component;
  let fixture: ComponentFixture<MyComp6204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
