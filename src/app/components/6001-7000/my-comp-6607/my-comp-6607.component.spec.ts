import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6607Component } from './my-comp-6607.component';

describe('MyComp6607Component', () => {
  let component: MyComp6607Component;
  let fixture: ComponentFixture<MyComp6607Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6607Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
