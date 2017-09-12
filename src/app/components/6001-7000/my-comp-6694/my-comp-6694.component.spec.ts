import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6694Component } from './my-comp-6694.component';

describe('MyComp6694Component', () => {
  let component: MyComp6694Component;
  let fixture: ComponentFixture<MyComp6694Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6694Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
