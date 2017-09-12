import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6264Component } from './my-comp-6264.component';

describe('MyComp6264Component', () => {
  let component: MyComp6264Component;
  let fixture: ComponentFixture<MyComp6264Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6264Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
