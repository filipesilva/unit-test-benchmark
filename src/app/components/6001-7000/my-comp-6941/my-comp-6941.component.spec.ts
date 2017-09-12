import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6941Component } from './my-comp-6941.component';

describe('MyComp6941Component', () => {
  let component: MyComp6941Component;
  let fixture: ComponentFixture<MyComp6941Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6941Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
