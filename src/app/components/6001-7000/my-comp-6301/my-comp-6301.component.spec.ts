import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6301Component } from './my-comp-6301.component';

describe('MyComp6301Component', () => {
  let component: MyComp6301Component;
  let fixture: ComponentFixture<MyComp6301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
