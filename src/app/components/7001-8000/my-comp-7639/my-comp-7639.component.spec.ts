import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7639Component } from './my-comp-7639.component';

describe('MyComp7639Component', () => {
  let component: MyComp7639Component;
  let fixture: ComponentFixture<MyComp7639Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7639Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
