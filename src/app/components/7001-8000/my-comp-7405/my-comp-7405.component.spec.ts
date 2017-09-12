import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7405Component } from './my-comp-7405.component';

describe('MyComp7405Component', () => {
  let component: MyComp7405Component;
  let fixture: ComponentFixture<MyComp7405Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7405Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
