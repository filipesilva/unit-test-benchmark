import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6642Component } from './my-comp-6642.component';

describe('MyComp6642Component', () => {
  let component: MyComp6642Component;
  let fixture: ComponentFixture<MyComp6642Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6642Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
