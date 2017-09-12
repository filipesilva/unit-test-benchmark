import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6405Component } from './my-comp-6405.component';

describe('MyComp6405Component', () => {
  let component: MyComp6405Component;
  let fixture: ComponentFixture<MyComp6405Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6405Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
