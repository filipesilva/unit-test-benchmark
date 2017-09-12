import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6569Component } from './my-comp-6569.component';

describe('MyComp6569Component', () => {
  let component: MyComp6569Component;
  let fixture: ComponentFixture<MyComp6569Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6569Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
