import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6232Component } from './my-comp-6232.component';

describe('MyComp6232Component', () => {
  let component: MyComp6232Component;
  let fixture: ComponentFixture<MyComp6232Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6232Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
