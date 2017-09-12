import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9405Component } from './my-comp-9405.component';

describe('MyComp9405Component', () => {
  let component: MyComp9405Component;
  let fixture: ComponentFixture<MyComp9405Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9405Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
