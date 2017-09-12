import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6832Component } from './my-comp-6832.component';

describe('MyComp6832Component', () => {
  let component: MyComp6832Component;
  let fixture: ComponentFixture<MyComp6832Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6832Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
