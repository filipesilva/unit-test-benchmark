import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6472Component } from './my-comp-6472.component';

describe('MyComp6472Component', () => {
  let component: MyComp6472Component;
  let fixture: ComponentFixture<MyComp6472Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6472Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
