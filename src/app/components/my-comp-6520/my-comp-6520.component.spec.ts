import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6520Component } from './my-comp-6520.component';

describe('MyComp6520Component', () => {
  let component: MyComp6520Component;
  let fixture: ComponentFixture<MyComp6520Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6520Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
