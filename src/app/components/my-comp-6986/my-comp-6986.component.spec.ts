import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6986Component } from './my-comp-6986.component';

describe('MyComp6986Component', () => {
  let component: MyComp6986Component;
  let fixture: ComponentFixture<MyComp6986Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6986Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
